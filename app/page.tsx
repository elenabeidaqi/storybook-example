import Button from "@/components/Button";
import Input from "@/components/Input";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <div className="w-full text-center py-10  flex flex-col">
      <div className="text-4xl py-2">storybook ant design nextjs</div>
      <hr />
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 w-1/12 p-3">
          <Button>text</Button>
          <Button type="primary">text</Button>
        </div>

        <div className="flex flex-col gap-2 w-1/6 p-3">
          <Input placeholder="my example text ........" />
          <Input placeholder="my example text ........" disabled />
        </div>

        <div className="flex flex-col gap-2 w-1/6 p-3">
          <UserCard description="my example text" role="User" name="user" />
          <UserCard
            description="my example text"
            role="Manager"
            name="manager"
          />
        </div>
      </div>
    </div>
  );
}
