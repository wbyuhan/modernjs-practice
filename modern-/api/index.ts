import axios from 'axios';

export default async (): Promise<
  { id: string; name: string; price: number }[]
> => {
  const res = await axios.get(
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/beeh7uvzhq/products.json',
  );
  return res.data;
};
