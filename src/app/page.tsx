import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import CTCheckbox from "@/components/ui/custom/ctcheckbox";
import {
  CTPagination,
  CTPaginationContent,
  CTPaginationItem,
  CTPaginationLink,
  CTPaginationNext,
  CTPaginationPrevious,
} from "@/components/ui/custom/ctpagination";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import Image from "next/image";
import mockData from "./mock_table.json";

export default function Home() {
  return (
    <>
      <nav className="w-screen h-16 bg-background-tertiary flex justify-center">
        <div className="w-full max-w-7xl h-full flex items-center justify-between p-5">
          <Image src={"/logo.webp"} alt="Logo" width={50} height={50} />
          <Avatar>
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <main className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 p-5 gap-5">
          <Card className="bg-background-secondary">
            <CardContent>
              <Table className="mt-5 w-full border-collapse text-foreground">
                <colgroup>
                  <col style={{ width: "80px" }} />
                  <col style={{ width: "auto" }} />
                  <col style={{ width: "125px" }} />
                </colgroup>
                <TableHeader>
                  <TableRow>
                    <TableHead className="border-r-[1px] border-b-[1px] border-foreground-secondary">
                      Dia
                    </TableHead>
                    <TableHead className="border-r-[1px] border-b-[1px] border-foreground-secondary">
                      Escrituras
                    </TableHead>
                    <TableHead className="border-b-[1px] border-foreground-secondary">
                      Catecismo
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.map(({ dia, escrituras, catecismo }) => (
                    <TableRow key={`table-row-${1}`}>
                      <TableCell className="border-r-[1px] border-b-[1px] border-foreground-secondary">
                        <CTCheckbox className="mr-3" /> <span>{dia}</span>
                      </TableCell>
                      <TableCell className="border-r-[1px] border-b-[1px] border-foreground-secondary">
                        <div className="w-full grid grid-cols-3 ">
                          <span>{escrituras[0]}</span>
                          <span>{escrituras[1]}</span>
                          <span>{escrituras[2]}</span>
                        </div>
                      </TableCell>
                      <TableCell className="border-b-[1px] border-foreground-secondary">
                        {catecismo}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <CTPagination className="justify-end">
                <CTPaginationContent className="text-foreground">
                  <CTPaginationItem>
                    <CTPaginationPrevious href="#" />
                  </CTPaginationItem>
                  <CTPaginationItem>
                    <CTPaginationLink href="#" isActive>
                      1
                    </CTPaginationLink>
                  </CTPaginationItem>
                  <CTPaginationItem>
                    <CTPaginationLink href="#">2</CTPaginationLink>
                  </CTPaginationItem>
                  <CTPaginationItem>
                    <CTPaginationLink href="#">3</CTPaginationLink>
                  </CTPaginationItem>
                  <CTPaginationItem>
                    <CTPaginationNext href="#" />
                  </CTPaginationItem>
                </CTPaginationContent>
              </CTPagination>
            </CardFooter>
          </Card>
          <Card className="bg-background-secondary">
            <CardContent>teste</CardContent>
            <CardFooter>Pagination</CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
}
