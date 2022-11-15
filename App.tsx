import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, HStack, AspectRatio, VStack, Image, Center, Text, Box, Button, Stack, Divider, Heading, Icon, Container } from 'native-base';

export default function App() {
  const NBBox = props => {
    return <Box m="2" borderRadius="md" bg="primary.600" justifyContent={"center"} {...props} />;
  };
  return (
    <NativeBaseProvider>

      <StatusBar style="auto" />

      <VStack flex={1} space={4} paddingTop={10} bgColor="#2e97c5" safeAreaTop>

        <Center w="100%" h="10" bg="indigo.500" rounded="md" shadow={3}>
          <Text color="white" fontSize={24}>Menu Principal</Text>
        </Center>

        <Center width={"100%"} padding={10}>
          <Image source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/carteirinha-39eb8.appspot.com/o/logo-Sumare.png?alt=media&token=e9beec17-69cb-4b5f-87fc-c3955c8bc8cf"
          }} width={250} height={65} alt="Alternate Text" />
        </Center>

        <Center w="100%" h="20" rounded="md" shadow={3}>
          <Text color="white" fontSize={24}>EAD</Text>
        </Center>
        <Center w="100%" h="20" rounded="md" shadow={3}>
          <Text color="white" fontSize={24}>Carteirinha Virtual</Text>
        </Center>
        <Center w="100%" h="20" rounded="md" shadow={3}>
          <Text color="white" fontSize={24}>Aluno Online</Text>
        </Center>
        <Center w="100%" h="20" rounded="md" shadow={3}>
          <Text color="white" fontSize={24}>Fale Conosco</Text>
        </Center>

      </VStack>



      {/* <Image source={{
          uri: "https://drive.google.com/file/d/1Koq_vxXHhLNladBA7wW7Up3b6WY2QgmN/view?usp=share_link.png"
        }} alt="Logo Sumaré" size="xl" /> */}

    </NativeBaseProvider >
  );
}