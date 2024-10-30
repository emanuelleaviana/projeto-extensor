import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
  place-self: center;
  margin-top: 40px;
`;

export const H1 = styled.h1`
    color: #046ee5;
    font-size: 18px;
    white-space: nowrap;
    text-align: center;
    font-weight: 700;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 10px 0;
  border: 1px solid #ccc;
  overflow-x: auto; /* Adiciona scroll horizontal se necessário */
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const TableCell = styled.td`
  text-align: left;
  padding: 8px;
  font-size: 14px;
  word-break: break-word; /* Quebra palavras somente em espaços */
`;

export const TableHead = styled.thead`
  background-color: #e0e0e0;
`;

export const TableBody = styled.tbody`
  /* Estilos para o corpo da tabela */
`;
