'use client'
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { ThemeProvider } from './layout';
import { Button } from '@/components/ui/button';
import Search from '../components/Search';
import WikipediaView from '@/components/WikipediaView';
import LeaderInfo from '../components/LeaderInfo';
import Results from '../components/Results';
import { IssueAreas } from '../components/IssueAreas';
import { OpenAPI } from 'src/client';
import CountryDetailPanel from '../components/CountryDetailPanel';
import { MoveLeftIcon } from 'lucide-react';
import { Map } from 'lucide-react';
import { FileSearch2 } from 'lucide-react';
import { CircleX } from 'lucide-react';

const Globe = dynamic(() => import('../components/Globe'), { ssr: false });

OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'
OpenAPI.TOKEN = async () => {
  return localStorage.getItem("access_token") || ""
}

const HomePage: React.FC = () => {
  const geojsonUrl = 'http://dev.open-politics.org/api/v1/countries/geojson/';
  const [results, setResults] = useState(null);
  const [summary, setSummary] = useState<string>('');
  const [articleContent, setArticleContent] = useState<string>('');
  const [country, setCountry] = useState<string | null>(null);
  const [leaderInfo, setLeaderInfo] = useState<any | null>(null);
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleString());
  const [isBrowseMode, setIsBrowseMode] = useState(true);
  const globeRef = useRef<any>(null);
  const [legislativeData, setLegislativeData] = useState([]);
  const [economicData, setEconomicData] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // Added state for visibility
  const [windowWidth, setWindowWidth] = useState<number>(0); // Added state for window width

  const { toast } = useToast();

  useEffect(() => {
    if (country) {
      const fetchLeaderInfo = async () => {
        try {
          console.log(`Fetching leader info for country: ${country}`);
          const response = await axios.get(`http://dev.open-politics.org/api/v1/countries/leaders/${country}`);
          console.log('Leader info response:', response.data);
          setLeaderInfo(response.data);
        } catch (error) {
          console.error('Error fetching leader info:', error);
          toast({
            title: "Error",
            description: `Failed to fetch leader info for ${country}. Please try again later.`,
          });
        }
      };

      fetchLeaderInfo();
    }
  }, [country, toast]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCountryClick = async (countryName: string) => {
    setCountry(countryName);
    setIsVisible(true);
  };

  const handleSearch = (results: any) => {
    setResults(results);
    setIsBrowseMode(false);
    toast({
      title: "Search Completed",
      description: "Your search results are now available.",
    });
  };

  const handleSummary = (summary: string) => {
    setSummary(summary);
  }

  const toggleMode = () => {
    setIsBrowseMode(!isBrowseMode);
  };

  const loadGeoJSON = () => {
    if (globeRef.current) {
      globeRef.current.loadGeoJSON();
    }
  };

  const getWindowWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  };
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="container relative mx-auto px-4 mt-0 min-h-screen max-w-full max-h-full overflow-x-hidde py-2">
        <div className="background"></div> {/* Background div */}
        <h1 suppressHydrationWarning className="my-0 pt-2 text-3xl text-left ml-8 z-52">{currentTime}</h1>

        {/* Globe */}
        <motion.div
          id="globe-container"
          className="relative"
          initial={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}
          animate={getWindowWidth() > 768 ? {
            // desktop view
            opacity: 1,
            top: isBrowseMode ? '50%' : '20%',
            left: isBrowseMode ? '50%' : '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            height: isBrowseMode ? '100%' : '50%',
            width: isBrowseMode ? '100%' : '10%', // Adjust width for detail mode
            zIndex: isBrowseMode ? 0 : 0,
          } : {
            // mobile view
            opacity: 1,
            top: isBrowseMode ? '50%' : '10%',
            left: isBrowseMode ? '50%' : '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            height: isBrowseMode ? '100%' : '50%',
            width: isBrowseMode ? '100%' : '30%'
          }}
          transition={{ duration: 0.5 }}
        >
          <Globe
            ref={globeRef}
            geojsonUrl={geojsonUrl}
            setArticleContent={setArticleContent}
            onCountryClick={handleCountryClick}
            isBrowseMode={isBrowseMode}
            toggleMode={toggleMode}
            setLegislativeData={setLegislativeData}
            setEconomicData={setEconomicData}
          />
        </motion.div>
        
        {/* Search */}
        <motion.div
          className="absolute w-full"
          initial={{ top: 'calc(50% + 250px)', left: '50%', transform: 'translate(-50%, 0)' }}
          animate={getWindowWidth() > 768 ? {
            // desktop view
            top: isBrowseMode ? 'calc(100% - 200px)' : '30%',
            left: isBrowseMode ? 'calc(50% + 1/6 * 100%)' : 'calc(50% + 1/6 * 100%)',
            transform: 'translate(-50%, -50%)', // Centers both horizontally and vertically
            height: isBrowseMode ? '700px' : '50px', // Adjust height based on mode
            width: isBrowseMode ? '100%' : '100%' // Adjust width based on mode
          } : {
            // mobile view
            top: isBrowseMode ? 'calc(110%)' : 'calc(35%)',
            left: isBrowseMode ? '50%' : '50%',
            transform: 'translate(-50%, -50%)', // Centers both horizontally and vertically
            height: isBrowseMode ? '700px' : '50px', // Adjust height based on mode
            width: isBrowseMode ? '100%' : '100%' // Adjust width based on mode
          }}
          transition={{ duration: 0.5 }}
        >
          <Search setResults={handleSearch} setCountry={setCountry} globeRef={globeRef} setSummary={handleSummary} />
        </motion.div>

        {/* Results */}
        <motion.div
          className="absolute w-full"
          initial={{ display: 'none' }}
          animate={getWindowWidth() > 768 ? {
            // desktop viewq
            top: isBrowseMode ? 'calc(50% + 300px)' : 'calc(50%)',
            left: isBrowseMode ? 'calc(50% + 1/6 * 100%)' : 'calc(50% + 1/6 * 100%)',
            transform: isBrowseMode ? 'translate(-50%, 0)' : 'translate(-50%, 0)',
            height: isBrowseMode ? '0px' : '100%',
            width: isBrowseMode ? '100%' : '100%',
            display: isBrowseMode ? 'none' : 'block',
          } : {
            // mobile view
            position: 'absolute',
            top: isBrowseMode ? '0px' : 'calc(45%)',
            left: isBrowseMode ? '50%' : '50%',
            transform: isBrowseMode ? 'translate(-50%, 0)' : 'translate(-50%, 0)',
            height: isBrowseMode ? '0px' : '100%',
            width: isBrowseMode ? '100%' : '100%',
            display: isBrowseMode ? 'none' : 'block',
          }}
          transition={{ duration: 0.5 }}
        >
          <Results results={results} summary={summary} />
        </motion.div>

        {/* Country detail panel */}
        <motion.div
        className={`relative bg-sky-400 dark:bg-[#373737] mt-2 bg-opacity-20 dark:bg-opacity-40 backdrop backdrop-blur-md dark:backdrop-blur-2xl
          ${isVisible ? 'z-50' : 'z-10'}
          ${isVisible ? 'rounded-lg' : 'opacity-10'}
          `}
        initial={{ bottom: '0', display: 'block' }}
        animate={getWindowWidth() > 768 ? {
          // desktop view
          bottom: isVisible ? '0' : 'auto',
          top: isVisible ? 'auto' : 'calc(100vh - 200px)',
          left: '50%',
          transform: 'translate(-50%, 0)',
          height: '100%',
          width: isBrowseMode ? '50%' : '100%',
          display: isVisible ? 'block' : 'none', // Control display here
        } : {
          // mobile view
          display: isVisible ? 'block' : 'none',
          bottom: isVisible ? '0' : 'auto',
          top: isVisible ? 'auto' : 'calc(0vh)',
          left: '50%',
          transform: 'translate(-50%, 0)',
          height: '100%',
          width: isBrowseMode ? '100%' : '100%',
        }}
        transition={{ duration: 0.5 }}
      >
        {/* <Button onClick={toggleVisibility} className="w-16 border-none">
          {isVisible ? <CircleX /> : 'Show Country Infos'}
        </Button> */}
        <CountryDetailPanel
          articleContent={articleContent}
          legislativeData={legislativeData}
          economicData={economicData}
          leaderInfo={leaderInfo}
          isVisible={isVisible}
          toggleVisibility={toggleVisibility}
        />
      </motion.div>

        {/* Toggle button */}
        <motion.div
          className="relative"
          initial={{ }}
          animate={getWindowWidth() > 768 ? {
            // desktop view
            opacity: isBrowseMode ? 1 : 0.5,
            top: isBrowseMode ? '45%' : '20%',
            left: isBrowseMode ? '50%' : '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
          } : {
            // mobile view
            opacity: isBrowseMode ? 1 : 0.5,
            top: isBrowseMode ? '60%' : '20%',
            left: isBrowseMode ? '50%' : '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
          }}
          transition={{ duration: 0.5 }}
        >
        <Button onClick={toggleMode} className="z-50 dark:invert bg-sky-300 dark:bg-sky-700">
            {isBrowseMode ? <FileSearch2 className="dark:invert" /> : <Map className="dark:invert" />}
          </Button>
        </motion.div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;