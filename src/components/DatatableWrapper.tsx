import dynamic from 'next/dynamic';

const Datatable = dynamic(() => import('./DataTable'), {
  ssr: false,
});

export default function DatatableWrapper() {
  return <Datatable />;
}