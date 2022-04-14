import styled from 'styled-components'
import '../style/common/theme.scss'

export default styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: var(--mt-surface);

  * {
    font-family: 'Noto Sans KR', sans-serif;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin: 6px 0 6px 10px;
    display: inline-block;
  }

  main {
    padding: 20px;
  }
`