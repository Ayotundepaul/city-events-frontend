import useSWR from 'swr'

export default function Profile() {
  const { data, error } = useSWR('http://localhost:5000/api/events', fetch)
  console.log('data',data);
  console.log('error',error);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
