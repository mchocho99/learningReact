import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Highlight,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { getHomeWorld } from "../api/StarWarsApi";

const Person = ({
  name,
  height,
  gender,
  skin_color,
  hair_color,
  homeworld: homeWorldUrl,
}) => {
  const [homeworldText, setHomeworldText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!homeworldText && homeWorldUrl) {
      setLoading(true);
      getHomeWorld(homeWorldUrl).then((response) => {
        setLoading(false);
        setHomeworldText(response.data.name);
      });
    }
  }, [homeWorldUrl, homeworldText]);

  return (
    <>
      <Skeleton isLoaded={!loading}>
        <Card>
          <CardHeader>
            <Heading size="md">{name}</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              <Highlight
                query="Height:"
                styles={{ px: "1", py: "1", bg: "orange.100" }}
              >
                {`Height: ${height} cm`}
              </Highlight>
            </Text>
            <Text>
              <Highlight
                query="Gender:"
                styles={{ px: "1", py: "1", bg: "blue.100" }}
              >
                {`Gender: ${gender}`}
              </Highlight>
            </Text>
            <Text>
              <Highlight
                query="Skin:"
                styles={{ px: "1", py: "1", bg: "red.100" }}
              >
                {`Skin: ${skin_color}`}
              </Highlight>
            </Text>
            <Text>
              <Highlight
                query="Hair color:"
                styles={{ px: "1", py: "1", bg: "green.100" }}
              >
                {`Hair color: ${hair_color}`}
              </Highlight>
            </Text>
            <Text>
              <Highlight
                query="Homeworld:"
                styles={{ px: "1", py: "1", bg: "yellow.100" }}
              >
                {`Homeworld: ${homeworldText}`}
              </Highlight>
            </Text>
          </CardBody>
        </Card>
      </Skeleton>
    </>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  gender: PropTypes.string,
  skin_color: PropTypes.string,
  hair_color: PropTypes.string,
  homeworld: PropTypes.string,
};

export default Person;
