import { useDisclosure } from '@chakra-ui/hooks';
import {
  Box,
  Text,
  Link,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Avatar,
  Textarea,
  useBreakpointValue,
  Input,
  Select,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';

import { createTask } from '../../../apis/tasks';

export const CreateTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = useBreakpointValue({ base: 'full', lg: 'xl' });
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: '',
    priority: '',
    tags: '',
    startDate: '',
    finalDate: '',
  });

  const changeTask = ({ id, value }: any) => {
    setTask({ ...task, [id]: value });
  };

  const createPost = () => {
    const { title, description, status, priority, tags, startDate, finalDate } = task;
    if (
      title === '' ||
      description === '' ||
      status === '' ||
      priority === '' ||
      tags === '' ||
      startDate === '' ||
      finalDate === ''
    ) {
      return;
    } else {
      createTask(task);
      onClose();
    }
  };

  const generateCurrentLocalDate = () => {
    return new Date().toLocaleDateString();
  };

  const openModal = () => {
    const date = generateCurrentLocalDate();

    setTask({ ...task, startDate: date, finalDate: date });
    onOpen();
  };

  return (
    <Box>
      <Button
        fontSize="20px"
        fontWeight="normal"
        fontFamily="Montserrat"
        bg={'var(--dark-gray-color)'}
        textColor={'var(--white-color)'}
        py="4"
        ml="24px"
        rounded="none"
        _hover={{
          bg: 'var(--secondary-color-alt)',
          transition: '.9s',
        }}
        borderRight="4px"
        borderColor="var(--primary-color)"
        onClick={openModal}
      >
        NOVA TASK
      </Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalContent p="0" boxShadow="dark-lg" rounded="none">
          <ModalHeader
            d="flex"
            justifyContent="space-between"
            alignItems="center"
            boxShadow="md"
            pl="0"
          >
            <Button
              bg="var(--dark-gray-color)"
              borderRight="4px"
              borderRightColor="var(--primary-color)"
              wrap="nowrap"
              alignItems="center"
              rounded="none"
              _hover={{
                bg: 'var(--dark-gray-color)',
              }}
              onClick={onClose}
            >
              <Text color="var(--white-color)" ml="4" mr="4">
                VOLTAR
              </Text>
            </Button>
            <Text>NOVA TASK</Text>
            <Link color="#2D00F7" onClick={createPost}>
              Postar
            </Link>
          </ModalHeader>
          <ModalBody d="flex" fontFamily="Montserrat" mt="4" alignItems="center">
            <Avatar
              showBorder={true}
              size="md"
              src="https://avatars0.githubusercontent.com/u/1164541?v=4.png"
            />
            <Input
              id="title"
              ml="4"
              resize="none"
              placeholder="Título para a atividade"
              onChange={({ target }) => changeTask(target)}
              maxLength={80}
            />
          </ModalBody>
          <ModalFooter fontFamily="Montserrat" d="flex" flexDir="column" mr="2">
            <Input
              my="2"
              id="tags"
              ml="4"
              resize="none"
              placeholder="Identifique a tarefa com tags"
              onChange={({ target }) => changeTask(target)}
              maxLength={80}
            />
            <Flex ml="4" justifyContent="space-between" width="100%">
              <Select
                mr="2"
                my="2"
                id="status"
                resize="none"
                placeholder="Status"
                onChange={({ target }) => changeTask(target)}
              >
                <option value="Pendente">Pendente</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Pronto">Pronto</option>
              </Select>
              <Select
                ml="2"
                my="2"
                id="priority"
                resize="none"
                placeholder="Prioridade"
                onChange={({ target }) => changeTask(target)}
              >
                <option value="Baixa">Baixa</option>
                <option value="Média">Média</option>
                <option value="Alta">Alta</option>
                <option value="Urgente">Urgente</option>
              </Select>
            </Flex>
            <Flex ml="4" justifyContent="space-between" width="100%">
              <Input
                my="2"
                id="startDate"
                mr="2"
                resize="none"
                placeholder="Data de ínicio da tarefa"
                onChange={({ target }) => changeTask(target)}
                maxLength={80}
                value={generateCurrentLocalDate()}
              />
              <Input
                value={generateCurrentLocalDate()}
                my="2"
                id="finalDate"
                ml="2"
                resize="none"
                placeholder="Prazo para conclusão da tarefa"
                onChange={({ target }) => changeTask(target)}
                maxLength={80}
              />
            </Flex>
            <Textarea
              id="description"
              ml="4"
              resize="none"
              placeholder="Escreva uma descrição aqui..."
              h={{ base: 80, lg: 40 }}
              onChange={({ target }) => changeTask(target)}
              maxLength={180}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
