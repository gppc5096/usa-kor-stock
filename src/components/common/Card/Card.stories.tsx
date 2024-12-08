import { Card } from './Card'
import { Button } from '../Button/Button'

export default {
  title: 'Components/Card',
  component: Card,
}

export const Default = () => (
  <Card>
    <p>기본 카드 내용입니다.</p>
  </Card>
)

export const WithTitleAndSubtitle = () => (
  <Card
    title="카드 제목"
    subtitle="카드 부제목"
  >
    <p>제목과 부제목이 있는 카드입니다.</p>
  </Card>
)

export const WithActions = () => (
  <Card
    title="카드 제목"
    actions={
      <>
        <Button variant="ghost">취소</Button>
        <Button>확인</Button>
      </>
    }
  >
    <p>하단에 액션 버튼이 있는 카드입니다.</p>
  </Card>
)

export const Variants = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Card title="Outlined 카드" variant="outlined" bordered>
      <p>테두리가 있는 카드입니다.</p>
    </Card>
    <Card title="Filled 카드" variant="filled">
      <p>배경색이 있는 카드입니다.</p>
    </Card>
  </div>
)

export const Hoverable = () => (
  <Card title="호버 가능한 카드" hoverable>
    <p>마우스를 올리면 효과가 나타나는 카드입니다.</p>
  </Card>
)

export const Loading = () => (
  <Card title="로딩 중인 카드" loading>
    <p>로딩 중인 상태를 표시하는 카드입니다.</p>
  </Card>
)

export const FullWidth = () => (
  <Card title="전체 너비 카드" fullWidth>
    <p>부모 요소의 전체 너비를 차지하는 카드입니다.</p>
  </Card>
) 