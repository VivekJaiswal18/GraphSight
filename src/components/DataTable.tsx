'use client'
import { useQuery } from '@apollo/client';
import { PUNK_DATA_QUERY } from '../lib/queries';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function PunkDataTable() {
  const { loading, error, data } = useQuery(PUNK_DATA_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Accounts Data</h2>
        <Table>
          <TableCaption>A list of accounts and their data.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Account ID</TableHead>
              <TableHead>Punks Owned</TableHead>
              <TableHead>Bought</TableHead>
              <TableHead>NFTs Owned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.accounts.map((account: any) => (
              <TableRow key={account.id}>
                <TableCell>{account.id}</TableCell>
                <TableCell>{account.punksOwned.length}</TableCell>
                <TableCell>{account.bought.length}</TableCell>
                <TableCell>{account.nftsOwned}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Punks Data</h2>
        <Table>
          <TableCaption>A list of punks and their data.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Punk ID</TableHead>
              <TableHead>Transferred To</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Purchased By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.punks.map((punk: any) => (
              <TableRow key={punk.id}>
                <TableCell>{punk.id}</TableCell>
                <TableCell>{punk.transferedTo?.id || 'N/A'}</TableCell>
                <TableCell>{punk.assignedTo?.id || 'N/A'}</TableCell>
                <TableCell>{punk.purchasedBy?.id || 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}