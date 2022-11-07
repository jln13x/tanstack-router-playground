import { router } from "./router";

export const AboutPage = () => {
  const route = router.useRoute("/about");
  const routerState = router.useState();

  console.log({
    data: route.loader,
  });

  return <div>About Page</div>;
};
