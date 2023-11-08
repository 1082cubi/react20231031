import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";

function App(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub4?id=" + customerId)
      .then(({ data }) => setCustomerName(data))
      .catch((e) => setCustomerName(null))
      .finally(() => setIsLoading(false));
  }, [customerId]);
  return (
    <div>
      <Select
        placeholder="고객번호 선택"
        onChange={({ target }) => setCustomerId(target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="121">121</option>
      </Select>
      <Box>
        {isLoading && <Spinner />}
        {isLoading || customerId}
        <>
          {customerName === null ? (
            <Text>고객정보가 아직 없습니다</Text>
          ) : (
            <Text>고객 이름은 이거 : {customerName}</Text>
          )}
        </>
      </Box>
    </div>
  );
}

export default App;
