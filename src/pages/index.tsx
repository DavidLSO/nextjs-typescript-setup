import React from 'react'
import Head from 'next/head'

import {
  Heading,
  List,
  ListItem,
  ListIcon,
  Link,
  Grid,
  Flex
} from '@chakra-ui/core'
import NextLogo from '../assets/img/nextjs.svg'

const Home: React.FC = () => {
  return (
    <Grid
      height="100vh"
      templateColumns="10% 80% 10%"
      templateRows="25% 15% 60%"
      templateAreas="
        '. logo .'
        '. title .'
        '. techs .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" justifyContent="center">
        <Head>
          <title>Home Page</title>
        </Head>
        <NextLogo />
      </Flex>
      <Flex gridArea="title" justifyContent="center">
        <Heading size="2xl">Boilerplate Nextjs + Typescript</Heading>
      </Flex>
      <Flex gridArea="techs" justifyContent="center">
        <List spacing={3}>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            <Link href="https://chakra-ui.com/" isExternal>
              Chakra-ui
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            <Link href="https://emotion.sh/docs/styled" isExternal>
              emotion
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            <Link href="https://github.com/twopluszero/next-images">
              next-images
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            <Link href="https://eslint.org/" isExternal>
              Eslint
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            <Link href="https://prettier.io/" isExternal>
              Prettier
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Grid>
  )
}

export default Home
