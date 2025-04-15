import React from "react";
import { SectionContainer } from "./section-container";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DataDisplayComponents() {
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
        
        {/* Badges */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Badges & Pills</h3>
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
