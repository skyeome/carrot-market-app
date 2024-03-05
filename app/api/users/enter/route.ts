import client from "@/libs/server/client";

export async function POST(request: Request) {
  const { phone, email } = await request.json();
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return new Response("정보가 없습니다.", { status: 400 });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  return new Response(JSON.stringify({ phone, email }), {
    status: 200,
  });
}
