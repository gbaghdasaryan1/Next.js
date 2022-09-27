import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Htag from "../components/Htag";
import P from "../components/P";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import { withLayout } from "../HOC/withLayout";
import axios from "axios";
import { MenuItem } from "../Interfaces/menu.interface";
import Input from "../components/Input";
import Textarea from "../components/Texarea";
import { API } from "../helpers/api";

const Home = ({ menu, firstCategory }: HomeProps): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);
  const [value, setValue] = useState<number>(3);

  return (
    <>
      {counter}
      <Htag tag='h1'>asdfasdf</Htag>
      <Button arrow='down' appearance='ghost'>
        asdf
      </Button>

      <Button appearance='primary' onClick={() => setCounter((x) => x + 1)}>
        asdf
      </Button>
      <Button appearance='primary' arrow='down'>
        asdf
      </Button>
      <P size='s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi non ad sapiente adipisci aliquid ab quis distinctio maiores! Sunt.</P>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi non ad sapiente adipisci aliquid ab quis distinctio maiores! Sunt.</P>
      <P size='l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi non ad sapiente adipisci aliquid ab quis distinctio maiores! Sunt.</P>

      <Tag color='ghost'>asdfasdf</Tag>
      <Tag color='primary'>asdfasdf</Tag>
      <Tag color='green'>asdfasdf</Tag>
      <Tag color='red'>asdfasdf</Tag>

      <Rating rating={value} isEditable={true} setRating={setValue} />
      <Rating rating={4} isEditable={false} />
      <Input placeholder='Test' />
      <Textarea placeholder='test textarea' />
    </>
  );
};
export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
