import { Box } from "@chakra-ui/react";
import TopContainer from "../../Layouts/TopContainer/TopContainer";
import BannerSwiper from "../../Common/BannerSwiper/BannerSwiper";

export default function HomeBannerSwiper({
  banners,
  rounded = { base: 20, md: 40 },
  ...props
}) {
  return (
    <TopContainer>
      <Box
        mb={{ base: 8, md: 12 }}
        w="100%"
        boxShadow="2xl"
        rounded={rounded}
        {...props}
      >
        <BannerSwiper banners={banners} rounded={rounded} />
      </Box>
    </TopContainer>
  );
}
