import React, { useState } from "react";
import { SectionContainer } from "./section-container";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  ChevronUp, 
  ChevronDown, 
  BarChart as BarChartIcon,
  Check,
  ArrowUp,
  ArrowDown,
  Filter,
  CalendarDays,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  LineChart, 
  Line 
} from 'recharts';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from '@tanstack/react-table';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// TanStack Table Types
type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

// Column helper for TanStack Table
const columnHelper = createColumnHelper<Person>();

export function DataDisplayComponents() {
  // State for TanStack Table sorting
  const [sorting, setSorting] = useState<SortingState>([]);
  
  // TanStack Table data
  const tanStackData = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 28,
      visits: 10,
      status: 'active',
      progress: 80,
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      age: 32,
      visits: 5,
      status: 'inactive',
      progress: 45,
    },
    {
      id: '3',
      firstName: 'Robert',
      lastName: 'Johnson',
      age: 24,
      visits: 15,
      status: 'active',
      progress: 90,
    },
    {
      id: '4',
      firstName: 'Emily',
      lastName: 'Williams',
      age: 37,
      visits: 12,
      status: 'pending',
      progress: 60,
    },
  ];

  // TanStack Table columns
  const columns = [
    columnHelper.accessor('firstName', {
      header: 'First Name',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('lastName', {
      header: 'Last Name',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('age', {
      header: 'Age',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('visits', {
      header: 'Visits',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: info => {
        const status = info.getValue();
        return (
          <Badge className={
            status === 'active' ? 'bg-green-100 text-green-800' : 
            status === 'inactive' ? 'bg-gray-100 text-gray-800' : 
            'bg-yellow-100 text-yellow-800'
          }>
            {status}
          </Badge>
        );
      },
    }),
    columnHelper.accessor('progress', {
      header: 'Profile Progress',
      cell: info => {
        const progress = info.getValue();
        return (
          <div className="w-full">
            <div className="flex justify-between mb-1 text-xs">
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        );
      },
    }),
  ];

  // Initialize TanStack Table
  const table = useReactTable({
    data: tanStackData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // AG Grid column definitions
  const agGridColumnDefs = [
    { field: 'product', filter: true, sortable: true },
    { field: 'price', filter: true, sortable: true },
    { field: 'quantity', filter: true, sortable: true },
    { field: 'total', filter: true, sortable: true },
    { 
      field: 'status', 
      filter: true, 
      sortable: true,
      cellRenderer: (params: any) => {
        const status = params.value;
        return (
          <Badge className={
            status === 'Completed' ? 'bg-green-100 text-green-800' : 
            status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
            status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'
          }>
            {status}
          </Badge>
        );
      }
    },
  ];

  // AG Grid row data
  const agGridRowData = [
    { product: 'Laptop', price: 1299, quantity: 2, total: 2598, status: 'Completed' },
    { product: 'Smartphone', price: 699, quantity: 5, total: 3495, status: 'Processing' },
    { product: 'Headphones', price: 149, quantity: 10, total: 1490, status: 'Pending' },
    { product: 'Monitor', price: 349, quantity: 3, total: 1047, status: 'Completed' },
    { product: 'Keyboard', price: 79, quantity: 12, total: 948, status: 'Cancelled' },
    { product: 'Mouse', price: 49, quantity: 15, total: 735, status: 'Processing' },
    { product: 'Speakers', price: 129, quantity: 4, total: 516, status: 'Pending' },
    { product: 'Webcam', price: 89, quantity: 7, total: 623, status: 'Completed' },
  ];

  // AG Grid default column definitions
  const agGridDefaultColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };

  // Sample data for Recharts
  const chartData = [
    { name: 'Jan', sales: 4000, revenue: 2400, profit: 1800 },
    { name: 'Feb', sales: 3000, revenue: 1398, profit: 1200 },
    { name: 'Mar', sales: 2000, revenue: 9800, profit: 1900 },
    { name: 'Apr', sales: 2780, revenue: 3908, profit: 2200 },
    { name: 'May', sales: 1890, revenue: 4800, profit: 2500 },
    { name: 'Jun', sales: 2390, revenue: 3800, profit: 2000 },
    { name: 'Jul', sales: 3490, revenue: 4300, profit: 2100 },
  ];

  return (
    <SectionContainer 
      id="data-display" 
      title="Data Display" 
      description="Components for displaying and organizing data"
    >
      <div className="space-y-8">
        {/* Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Table</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 bg-gray-200 mr-4">
                        <AvatarFallback className="text-gray-500">
                          <User className="h-6 w-6" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                        <div className="text-sm text-gray-500">jane.cooper@example.com</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-900">Product Manager</div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" className="text-primary hover:text-primary-700 h-auto p-0">Edit</Button>
                      <Button variant="ghost" className="text-red-600 hover:text-red-800 h-auto p-0">Delete</Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 bg-gray-200 mr-4">
                        <AvatarFallback className="text-gray-500">
                          <User className="h-6 w-6" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Alex Johnson</div>
                        <div className="text-sm text-gray-500">alex.johnson@example.com</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-900">Developer</div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Away</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" className="text-primary hover:text-primary-700 h-auto p-0">Edit</Button>
                      <Button variant="ghost" className="text-red-600 hover:text-red-800 h-auto p-0">Delete</Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        
        {/* Cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Project Overview</CardTitle>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600">
                  This project is currently in development. Team members are actively working on features.
                </p>
                <div className="mt-4">
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-gray-50 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-gray-600">1</div>
                    <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-gray-600">2</div>
                    <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-gray-600">3</div>
                  </div>
                  <span className="text-xs text-gray-500">5 members</span>
                </div>
                <Button variant="ghost" className="text-sm font-medium text-primary hover:text-primary-700 h-auto p-0">View Details</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Sales Report</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Q2 2023</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600">
                  Quarterly sales report with detailed breakdowns and performance metrics.
                </p>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-xl font-semibold text-gray-900">$24,583</p>
                    <p className="text-xs text-green-600">↑ 12.5% from last quarter</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-900">368</p>
                    <p className="text-xs text-gray-500">Total transactions</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-gray-50 flex justify-end items-center">
                <Button variant="ghost" className="text-sm font-medium text-primary hover:text-primary-700 h-auto p-0">Download Report</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        {/* Charts using Recharts as per requirements */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Charts (Recharts)</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-md">Monthly Sales (Bar Chart)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={chartData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#8884d8" />
                      <Bar dataKey="revenue" fill="#82ca9d" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Line Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-md">Profit Trends (Line Chart)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={chartData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="profit" 
                        stroke="#8884d8" 
                        activeDot={{ r: 8 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#82ca9d" 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Area Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-md">Revenue Overview (Area Chart)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={chartData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="sales" 
                        stackId="1" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stackId="1" 
                        stroke="#82ca9d" 
                        fill="#82ca9d" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="profit" 
                        stackId="1" 
                        stroke="#ffc658" 
                        fill="#ffc658" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* TanStack Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">TanStack Table</h3>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th 
                        key={header.id}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div className="flex items-center space-x-1">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: <ChevronUp className="h-4 w-4" />,
                            desc: <ChevronDown className="h-4 w-4" />,
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* AG Grid */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">AG Grid</h3>
          <Card>
            <CardHeader>
              <CardTitle>Product Inventory (AG Grid)</CardTitle>
              <CardDescription>Powerful data grid with filtering, sorting and resizing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
                <AgGridReact
                  rowData={agGridRowData}
                  columnDefs={agGridColumnDefs}
                  defaultColDef={agGridDefaultColDef}
                  animateRows={true}
                  pagination={true}
                  paginationPageSize={5}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Avatar */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Avatars (Radix UI)</h3>
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex flex-col items-center gap-1.5">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=John" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-xs text-gray-500">Large</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=Jane" alt="Jane Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <span className="text-xs text-gray-500">Medium</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=Bob" alt="Bob Johnson" />
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
              <span className="text-xs text-gray-500">Small</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex -space-x-2">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=User1" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=User2" alt="User 2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=User3" alt="User 3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 border-2 border-white bg-gray-200">
                  <AvatarFallback>+2</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs text-gray-500">Group</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Avatar className="h-12 w-12 bg-primary text-white">
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <span className="text-xs text-gray-500">Fallback</span>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Timeline (react-vertical-timeline)</h3>
          <div className="border rounded-md p-6 bg-gray-50">
            <VerticalTimeline layout="1-column" lineColor="#e5e7eb">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#333' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="April 2023"
                iconStyle={{ background: '#3b82f6', color: '#fff' }}
                icon={<CalendarDays className="text-white" />}
              >
                <h3 className="text-lg font-medium">Project Launched</h3>
                <p className="text-gray-600">
                  Initial launch of the application with core features implemented.
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#333' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="June 2023"
                iconStyle={{ background: '#10b981', color: '#fff' }}
                icon={<Check className="text-white" />}
              >
                <h3 className="text-lg font-medium">Major Release v1.0</h3>
                <p className="text-gray-600">
                  First stable release with all planned features and comprehensive documentation.
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'white', color: '#333' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="September 2023"
                iconStyle={{ background: '#8b5cf6', color: '#fff' }}
                icon={<BookOpen className="text-white" />}
              >
                <h3 className="text-lg font-medium">Documentation Update</h3>
                <p className="text-gray-600">
                  Comprehensive update to documentation including tutorials and API references.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
        
        {/* Badges */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Badges & Pills (ShadCN)</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-primary-50 text-primary-800 border-primary-200">Default</Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Success</Badge>
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">Warning</Badge>
            <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">Error</Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Info</Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Premium</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200">Tag</Badge>
            <Badge className="rounded-md bg-primary-100 text-primary-800 hover:bg-primary-200">React</Badge>
            <Badge className="rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200">TypeScript</Badge>
            <Badge className="rounded-md bg-green-100 text-green-800 hover:bg-green-200">Node.js</Badge>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
