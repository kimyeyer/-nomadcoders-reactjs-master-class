import styled from 'styled-components'

const Card = styled.div`
  background: ${(props) => props.theme.bgSubColor};
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const Label = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.textColor};
`;

const Value = styled.span<{ positive: boolean }>`
  font-size: 13px;
  font-weight: 600;

  color: ${({ positive }) => (positive ? "#ef4444" : "#2255ff")};
`;

interface PriceProps {
  percent_change_1h: number;
  percent_change_1y: number;
  percent_change_6h: number;
  percent_change_7d: number;
  percent_change_12h: number;
  percent_change_15m: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_30m: number;
}
const Price = (data: PriceProps) => {
  const {
    percent_change_1h,
    percent_change_1y,
    percent_change_6h,
    percent_change_7d,
    percent_change_12h,
    percent_change_15m,
    percent_change_24h,
    percent_change_30d,
    percent_change_30m,
  } = data;

  const items = [
    { label: "15m", value: percent_change_15m },
    { label: "30m", value: percent_change_30m },
    { label: "1h", value: percent_change_1h },
    { label: "6h", value: percent_change_6h },
    { label: "12h", value: percent_change_12h },
    { label: "24h", value: percent_change_24h },
    { label: "7d", value: percent_change_7d },
    { label: "30d", value: percent_change_30d },
    { label: "1y", value: percent_change_1y },
  ];
  return (
    <Card>
      <Title>Performance</Title>
      <List>
        {items.map((item) => (
          <Row key={item.label}>
            <Label>{item.label}</Label>
            <Value positive={item.value >= 0}>
              {`${(item.value).toFixed(2)}%`}
            </Value>
          </Row>
        ))}
      </List>
    </Card>
  )
}

export default Price