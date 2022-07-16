import Button from "~/components/common/Button";

export default function Home() {
  return (
    <main className="w-full">
      {/* <span className="ml-5">안녕하세요</span> */}
      <Button event={() => console.log("click")}>Click</Button>
    </main>
  );
}
