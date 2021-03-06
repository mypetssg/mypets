import { useState, useContext } from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import MypetsBtn from "../../Common/MypetsBtn/MypetsBtn";
import Rating from "../../Common/Rating/Rating";
import ReviewTextArea from "../../Common/ReviewTextArea/ReviewTextArea";
import { callAPI } from "../../../context/AuthContext";
import AuthContext from "../../../context/AuthContext";

function OrderProductReviewModalBtn({ order_product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [rating, setRating] = useState(0);
  const [reviewed, setReviewed] = useState(order_product.reviewed);
  const [reviewText, setReviewText] = useState("");

  const { user } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setReviewText(e.target.value);
  };

  const postReview = async () => {
    const body = {
      date_created: new Date(),
      rating: rating + 1,
      text: reviewText,
      user: user.username,
      product: order_product.variant.product,
    };
    const response = await callAPI("/reviews", "POST", body);
  };

  const updateOrderProduct = async () => {
    try {
      const data = await callAPI(`/order-products/${order_product.id}`, "PUT", {
        reviewed: true,
      });
      setReviewed(true);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = async () => {
    postReview();
    updateOrderProduct();
    // update order product to REVIEWED
    onClose();
  };

  return (
    <>
      <Box w={{ base: "100%", md: "auto" }}>
        {reviewed ? (
          <MypetsBtn
            btnText="Review submitted"
            variant="outline"
            isDisabled={true}
            w="100%"
          />
        ) : (
          <MypetsBtn
            onClick={onOpen}
            btnText="Write a review"
            variant="outline"
            w="100%"
          />
        )}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: 4, md: 0 }}>
          <ModalHeader mr={0}>{order_product.variant.product.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Rating
              scale={5}
              size={36}
              mt={0}
              rating={rating}
              setRating={setRating}
            />
            <ReviewTextArea
              value={reviewText}
              onChange={handleInputChange}
              size="md"
              props={{ mt: 8 }}
            />
          </ModalBody>
          <ModalFooter>
            <MypetsBtn btnText="Submit review" onClick={onSubmit} w="100%" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderProductReviewModalBtn;
