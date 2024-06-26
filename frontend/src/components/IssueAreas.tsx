import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo } from "react";
import EconomicDataChart from './chart'; // Adjust the path as necessary
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DataTable = ({ columns, data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export function IssueAreas({ legislativeData, economicData }) {
  const newsData = useMemo(
    () => [
      { headline: "Breaking: Major political event shakes the nation." },
      { headline: "Local elections results are in, and the winners are..." },
      { headline: "International summit discusses climate change solutions." },
    ],
    []
  );

  const economicDataRows = useMemo(
    () => economicData.map((item) => ({
      year: item.name,
      gdp: item.gdp,
      gdpGrowthRate: item.gdp_growth_rate,
    })),
    [economicData]
  );

  const legislationColumns = useMemo(
    () => [
      {
        accessorKey: "law",
        header: "Law",
        cell: ({ row }) => (
          <div className="flex items-center">
            {row.original.status && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span
                      className={`flex h-3 w-3 mr-2 rounded-full ${
                        row.original.label === "red"
                          ? "bg-red-500"
                          : row.original.label === "yellow"
                          ? "bg-yellow-500"
                          : row.original.label === "green"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      }`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {row.original.status === "red"
                        ? "Proposal rejected"
                        : row.original.status === "yellow"
                        ? "Proposal under review"
                        : "Proposal accepted"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {row.original.law}
          </div>
        ),
      },
    ],
    []
  );

  const environmentalLegislationData = useMemo(
    () => [
      { law: "New carbon emission regulations introduced." },
      { law: "Ban on single-use plastics takes effect." },
      { law: "Renewable energy incentives increased." },
    ],
    []
  );

  const hotIssuesData = useMemo(
    () => [
      { issue: "Debate on gun control intensifies." },
      { issue: "Healthcare reform sparks controversy." },
      { issue: "Immigration policy changes proposed." },
    ],
    []
  );

  const newsColumns = useMemo(
    () => [
      {
        accessorKey: "headline",
        header: "Headline",
      },
    ],
    []
  );

  const economicColumns = useMemo(
    () => [
      {
        accessorKey: "year",
        header: "Year",
      },
      {
        accessorKey: "gdp",
        header: "GDP (in billion $)",
      },
      {
        accessorKey: "gdpGrowthRate",
        header: "GDP Growth Rate (%)",
      },
    ],
    []
  );

  const environmentalLegislationColumns = useMemo(
    () => [
      {
        accessorKey: "law",
        header: "Law",
      },
    ],
    []
  );

  const hotIssuesColumns = useMemo(
    () => [
      {
        accessorKey: "issue",
        header: "Hot Issue",
      },
    ],
    []
  );

  return (
    <div className="relative md:w-2/3 w-full py-2 px-0">
      <Tabs defaultValue="news" className="w-full px-2">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="news">News
                 <span className="flex h-3 w-3 ml-1 rounded-full bg-sky-500" />
          </TabsTrigger>
          <TabsTrigger value="economic-data">Econ. Data</TabsTrigger>
          <TabsTrigger value="legislation">Legislation</TabsTrigger>
        </TabsList>
        <TabsContent value="news">
          <Card>
            <CardHeader>
              <CardTitle>News
              </CardTitle>
              <CardDescription>
                Latest updates and headlines from around the world.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <DataTable columns={newsColumns} data={newsData} />
            </CardContent>
            <CardFooter>
              <Button>Read more</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="economic-data">
          <Card>
            <CardHeader>
              <CardTitle>Economic Data</CardTitle>
              <CardDescription>
                Key economic indicators and market trends.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div style={{ height: 250 }}>
                <EconomicDataChart data={economicDataRows} />
                {/* <DataTable columns={economicColumns} data={economicDataRows} /> */}
              </div>
            </CardContent>
            <CardFooter>
              <Button>View detailed report</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="legislation">
          <Card>
            <CardHeader>
              <CardTitle>Legislation</CardTitle>
              <CardDescription>
                Recent legislative processes and new laws.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
 
                  <div className="max-h-80 overflow-y-auto">
                    <DataTable columns={legislationColumns} data={legislativeData} />
                  </div>
                
            </CardContent>
            <CardFooter>
              <Button>Learn more</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

