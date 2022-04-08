import {
  Heading,
  Stack,
  Link,
  Box,
  Text,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Layout from '../components/layout';

export default function Koeneraad() {
  return (
    <Layout title={'Koeneraad'}>
      <Stack spacing={8} paddingX={8}>
        <Heading>Koeneraad</Heading>
        <Box>
          <Heading paddingBottom={'2'} size={'md'}>
            Wat betekent Koeneraad nou weer..
          </Heading>
          <Text>
            Ken je de uitspraak: &quot;Een koene ridder...&quot; Dat betekend
            een <em>dappere</em> ridder. Ik ben dus een dappere raadgever in de
            wereld van IT. Goed verhaal hè.
          </Text>
        </Box>
        <Box>
          <Heading paddingBottom={'2'} size={'md'}>
            Toen ik nog klein was
          </Heading>
          <Text>
            Vanaf het moment dat pa voor werk een pc thuis kreeg, zo&apos;n unit
            met hele grote floppy&apos;s, was ik verslaafd. Ik heb heel wat
            opgestoken door om te prutsen in dat computer spul. Lekker op alles
            klikken en het liefst in schermen waar ik de ballen
            verstand van had, zoals de BIOS. En als je de schroeven losmaakt en
            de panelen weghaalt zie je allemaal gave bankjes, ronddraaiende
            bladen en miljoenen kabels en lichtjes. Het is daarom ook niet
            gek dat ik het concept van authenticatie en authorisatie op vroege
            leeftijd al in de praktijk heb meegekregen.
          </Text>
        </Box>
        <Box>
          <Heading paddingBottom={'2'} size={'md'}>
            Wat ik nu doe
          </Heading>
          <Text>
            Uiteindelijk ben ik met een omweg er achter gekomen dat ik deze
            hobby kan uitoefenen als professional. Ik werk nu als Software
            Engineer bij Sogeti, <em>onderdeel van Capgemini</em>. Ik kan bij grote spelers in hun IT
            keuken kijken en geniet er elk moment van. Je bent in dit vakgebied
            nooit uitgeleerd. En het internet staat vol met nieuwe tech, open
            source projecten en gedreven mensen die goed kunnen uitleggen.
            <br />
            <Box paddingY={'5'}>
              Een kleine greep uit mijn favoriete onderdelen:
              <UnorderedList>
                <ListItem>GNU/Linux (I use Arch btw..)</ListItem>
                <ListItem>Systemen samenstellen en bouwen</ListItem>
                <ListItem>
                  Services voor thuis, te veel om op te noemen in deze
                  Item item tag maar bijv. een media server.
                </ListItem>
                <ListItem>Netwerkjes aanleggen</ListItem>
                <ListItem>
                  Programmeren (JavaScript & TypeScript frontend en backend)
                </ListItem>
                <ListItem>Websites bouwen</ListItem>
                <ListItem>En nog veel meer</ListItem>
              </UnorderedList>
            </Box>
          </Text>
          <Text>Mijn motto, gejat, dus niet origineel maar o zo relevant:</Text>
          <Box padding={'5'}>
            <Text
              as={'blockquote'}
              cite="https://www.astridListItemndgren.com/"
            >
              &quot;Ik heb het nog nooit gedaan, dus ik denk dat ik het wel
              kan.&quot;
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading paddingBottom={'2'} size={'md'}>
            Toekomst
          </Heading>
          <Text>
            Al dat gepruts kan ik nu dus heel goed. Zo goed dat mensen mij
            hebben aangenomen om bij andere mensen te prutsen. Wat een leven!
          </Text>
        </Box>
        <Box>
          <Heading paddingBottom={'2'} size={'md'}>
            En weet je wat?
          </Heading>
          <Text>
            Mogelijk kan ik ook voor jou prutsen en omklooien met iets waar je
            de ballen verstand van hebt en niet wil leren.
            <br />
            Ben je onderdeel van een non-profit organisatie zoals een sport- of
            buurtvereniging en heb je iemand nodig die advies kan geven over de
            mogelijkheden of moet er simpelweg iets gebeuren maar is het budget
            er niet voor? Doe me dan een bericht op{' '}
            <Link color={'teal.500'} href="mailto:info@koeneraad.com">
              info@koeneraad.com
            </Link>
            , ik bespreek graag wat ik voor je kan doen, betaald of onbetaald!
          </Text>
        </Box>
        <Box>
          <Text>
            <strong>Disclaimer</strong>: Als je tegen de tijd dat je deze
            disclaimer leest niet door hebt dat ik met &quot;prutsen&quot; of
            &quot;omklooien&quot; eigenlijk <em>werken met computers</em>{' '}
            bedoel, zijn we geen goede match en heb ik liever niet dat je mij
            een bericht stuurt. Wel zo eerlijk toch?
          </Text>
        </Box>
        <Box>
          <Heading paddingBottom={'3'} size={'sm'}>
            Details
          </Heading>
          <UnorderedList>
            <ListItem>KVK: 78606667</ListItem>
//             <ListItem>BTW: NL003353663B14</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </Layout>
  );
}
