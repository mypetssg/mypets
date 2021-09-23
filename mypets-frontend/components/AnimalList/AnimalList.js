import {
    Stack
} from "@chakra-ui/react"
import {
    FaCat,
    FaDog
} from 'react-icons/fa'

const AnimalButton = ({ animal, ...props }) => {
    return (
        <Center
            w="100%"
            py={{ lg: 3 }}
            px={{ lg: 6 }}
            minW={{ base: '160px', lg: 'none' }}
            minH={{ base: '56px', lg: 'none' }}
            rounded="md"
            bgColor="gray.100"
            textColor="gray.600"
            fontSize="lg"
            _hover={{ bgGradient: "linear(to-t, mypets.900, mypets.100)", textColor: "gray.100", cursor: "pointer" }}
            _active={{ transform: "scale(0.95)" }}
            {...props}
        >
            {animal == 'Cat' ?
                <Icon
                    as={FaCat}
                /> :
                animal == 'Dog' ?
                    <Icon
                        as={FaDog}
                    /> :
                    <></>
            }
            {animal}
        </Center>
    )
}

export default function AnimalList({ animals, setSelectedAnimal }) {
    return (
        <Stack 
            mt={{ lg: 0 }}
            direction={{ base: 'row', lg: 'row'}} 
            overflow={{ base: 'auto' }}
        >
            {animals.map((animal, i) => (
                <AnimalButton
                    key={i}
                    animal={animal}
                    onClick={setSelectedAnimal(animal)}
                />
            ))}
        </Stack>
    )
}
