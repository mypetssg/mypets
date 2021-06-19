import { MenuButton, Button } from '@chakra-ui/react'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import { ChevronDownIcon } from '@chakra-ui/icons'

function MypetsMenuBtn({ menuBtnText }) {
    return (
        <>
        <MenuButton 
            // pt={4}
            // pb={4} 
            // py={6} 
            p={4}
            as={Box} 
            rightIcon={<ChevronDownIcon />} 
            variant='outline' 
            borderColor='mypets.100' 
            _hover={{ textColor: 'mypets.100', cursor: "pointer" }}
            _expanded={{ textColor: 'mypets.100' }}
        >
            {menuBtnText}
        </MenuButton>
        </>
    )
}

export default MypetsMenuBtn
