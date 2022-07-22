import { Meta, useNavigate } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getUserId } from "~/__mock__/user";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import Button from "~/components/common/Button";

export const meta: MetaFunction = () => {
  return {
    title: "내 정보",
    description: "고고 내 정보 페이지",
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);

  if (!userId) throw new Response("로그인이 필요합니다", { status: 401 });

  return json({
    title: "내 정보",
  });
};

const Profile = () => {
  return (
    <>
      <Meta />
      <div>
        <h1>내정보 라우트</h1>
      </div>
    </>
  );
};

export const CatchBoundary = () => {
  const navigate = useNavigate();

  const props = {
    event: () => navigate("/login"),
  };

  return (
    <div className="h-[42.5rem] flex flex-col px-3">
      <div className="flex-1 flex flex-col justify-center items-center">
        <picture className="w-48">
          <img
            className="w-full"
            src="/images/10_Mountain3.png"
            alt="Mountain.png"
          />
        </picture>
        <p className="text-md pt-3">
          로그인하고 나만의 등산로그를 기록해보세요!
        </p>
      </div>
      <Button {...props}>로그인/회원가입</Button>
    </div>
  );
};

export default Profile;
