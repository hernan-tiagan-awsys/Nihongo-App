import { AbsoluteCenter } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { Spinner } from "@chakra-ui/spinner";

function Loader({ isLoading }) {
  return (
    <Modal data-testid="loader" isOpen={isLoading} size="full" bg="gray.100">
      <ModalOverlay />
      <ModalContent bg="blackAlpha.100">
        <ModalBody>
          <AbsoluteCenter>
            <Spinner data-testid="loader" color="white" size="xl" />
          </AbsoluteCenter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default Loader;
