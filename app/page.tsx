import Image from "next/image";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Motivational Quote Generator</h1>
      <form className="flex flex-col gap-4 w-full max-w-sm">
        <Input type="text" placeholder="Enter a topic (e.g. success, life)" name="topic" />
        <Button type="submit">Get Quotes</Button>
      </form>
    </div>
  );
}
