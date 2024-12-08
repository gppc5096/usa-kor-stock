import { Modal } from './Modal'
import { Button } from '../Button/Button'
import { useState } from 'react'

export default {
  title: 'Components/Modal',
  component: Modal,
}

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="기본 모달"
      >
        <p>기본 모달 내용입니다.</p>
      </Modal>
    </>
  )
}

export const WithFooter = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="푸터가 있는 모달"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              취소
            </Button>
            <Button onClick={() => setIsOpen(false)}>확인</Button>
          </>
        }
      >
        <p>푸터가 있는 모달 내용입니다.</p>
      </Modal>
    </>
  )
}

export const Sizes = () => {
  const [isOpen, setIsOpen] = useState<'sm' | 'md' | 'lg' | null>(null)

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button onClick={() => setIsOpen('sm')}>Small</Button>
        <Button onClick={() => setIsOpen('md')}>Medium</Button>
        <Button onClick={() => setIsOpen('lg')}>Large</Button>
      </div>
      <Modal
        isOpen={!!isOpen}
        onClose={() => setIsOpen(null)}
        title={`${isOpen?.toUpperCase()} 모달`}
        size={isOpen || 'md'}
      >
        <p>다양한 크기의 모달을 지원합니다.</p>
      </Modal>
    </>
  )
}

export const LongContent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="긴 내용의 모달"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} style={{ marginBottom: '1rem' }}>
            긴 내용의 모달 테스트를 위한 {i + 1}번째 문단입니다.
          </p>
        ))}
      </Modal>
    </>
  )
} 