import { IconButton, Td, Tr, useDisclosure } from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import ThemeColors from "../main/ThemeColors";
import AlerPopUp from "../../components/AlerPopUp";

const QuestionRow = ({
    question,
    index,
    setIsView,
    setQnPreview,
    deleteQuestion,
    setIsEdit,
    setPreviewIndex,
}) => {
    const { bg, hover } = ThemeColors();
    // For individual question delete
    const {
        isOpen: isAlertRowOpen,
        onOpen: onAlertRowOpen,
        onClose: onAlertRowClose,
    } = useDisclosure();
    const {
        level,
        type,
        set,
        question: qn,
        options,
        answer,
        optionsTranslate,
        questionTranslate,
    } = question;

    return (
        <Tr cursor="pointer" _hover={{ bg: hover }}>
            <Td>{index + 1}</Td>
            <Td>{level}</Td>
            <Td>{type}</Td>
            <Td>{set}</Td>
            <Td>{qn}</Td>
            {/* <Td>{options.join(", ")}</Td>
            <Td>{answer}</Td>
            <Td>{optionsTranslate.join(", ")}</Td>
            <Td>{questionTranslate}</Td> */}
            <Td py="-2.5em">
                <IconButton
                    icon={<FiEye />}
                    size="lg"
                    bg="transparent"
                    cursor="pointer"
                    onClick={() => {
                        setIsView(true);
                        setQnPreview(question);
                        setPreviewIndex(index);
                    }}
                />
                &nbsp;&nbsp;
                <IconButton
                    icon={<FiEdit />}
                    size="lg"
                    bg="transparent"
                    cursor="pointer"
                    onClick={() => {
                        setIsEdit(true);
                        setQnPreview(question);
                        setPreviewIndex(index);
                    }}
                />
                &nbsp;&nbsp;
                <IconButton
                    icon={<FiTrash2 />}
                    size="lg"
                    bg="transparent"
                    cursor="pointer"
                    onClick={onAlertRowOpen}
                />
                &nbsp;
                <AlerPopUp
                    isOpen={isAlertRowOpen}
                    onClose={onAlertRowClose}
                    onClick={() => {
                        deleteQuestion(index);
                        onAlertRowClose();
                    }}
                    message={"Question"}
                />
            </Td>
        </Tr>
    );
};
export default QuestionRow;
