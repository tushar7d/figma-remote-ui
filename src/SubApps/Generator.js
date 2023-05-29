import { Box, InputGroup, Input, Button, SelectInput } from "@revolut/ui-kit";

import SubAppHeader from "../Components/SubAppHeader";

function Index() {
  return (
    <Box px="s-12">
      <SubAppHeader
        title="Generator"
        description="Generate a cover for your project"
        image="https://assets.revolut.com/assets/hub-icons/Vaults-60.png"
      />

      <InputGroup>
        <Input label="Project" />
        <Input label="Designer" />
        <SelectInput
          label="Type"
          labelList="Project Type List"
          options={Object.values({
            PD: {
              label: "Product Design",
              code: "PD",
            },
            DS: {
              label: "Library & DS",
              code: "DS",
            },
            DO: {
              label: "Design OPs",
              code: "DO",
            },
            BR: {
              label: "Brand",
              code: "BR",
            },
            PR: {
              label: "Presentation",
              code: "PR",
            },
            PO: {
              label: "Prototype",
              code: "PO",
            },
          }).map((country) => ({
            key: country.code,
            label: country.label,
            value: country,
          }))}
        />
      </InputGroup>
      <Button mt={"s-16"} elevated>
        Generate
      </Button>
    </Box>
  );
}

export default Index;
