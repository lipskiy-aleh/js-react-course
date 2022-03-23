import { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css';

import { Button, Input, Row, Col } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import { useCallback, useState, useRef, useEffect } from 'react';

const theme = {
  colors: {
    primary: 'black',
    secondary: '#c4c4c4',
    link: 'green',
  },
  spacing: {
    s0: '0px',
    s1: '4px',
    s2: '8px',
    s3: '12px',
    s4: '16px',
  }
}

const StyledRow = styled(Row)`
  width: 500px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`

function App() {
  const [city, setCity] = useState('')
  const countryInputRef = useRef(null)

  useEffect(() => {
    countryInputRef.current.focus()
  }, [])

  const onCityInputChange = useCallback((e) => {
    const value = e.target.value

    setCity(value)
  }, [])

  const onSearchClick = useCallback(() => {
    const country = countryInputRef.current.input.value
    console.log(city)
    console.log(country)
    debugger
  }, [city])

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {/* <Menu items={[{ title: 'Home' }, { title: 'About', active: true }]} />
        <StyledMenu items={[{ title: 'Home' }, { title: 'About', active: true }]} /> */}

        <StyledRow>
          <Col span={11}>
            <Input placeholder='City' value={city} onChange={onCityInputChange} />
          </Col>
          <Col span={11}>
            <Input placeholder='Country' ref={countryInputRef} />
          </Col>
          <Col span={2}>
            <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={onSearchClick} />
          </Col>
        </StyledRow>



      </Wrapper>
    </ThemeProvider>
  );
}

export default App;