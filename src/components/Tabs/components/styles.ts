import styled from 'styled-components'

export const BaseTable = styled.table`
  width: 100%;
  overflow-x: scroll;

  & > thead {
    width: 100%;
    color: ${({ theme }) => theme.colors.primary};
  }

  & > thead > tr > th {
    min-width: 140px;
    padding: 8px;
  }

  & > thead > tr > th:first-child {
    min-width: 50px;
  }

  & > thead > tr > th:last-child {
    text-align: end;
  }

  & > tbody {
    width: 100%;
    font-weight: 200;
  }

  & > tbody > tr > td {
    min-width: 140px;
    padding: 8px;
    text-align: center;
  }

  & > tbody > tr > td:first-child {
    min-width: 50px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  & > tbody > tr > td:last-child {
    text-align: end;
  }
`
