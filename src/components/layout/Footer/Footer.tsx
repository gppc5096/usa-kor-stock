import styled from 'styled-components'

const FooterWrapper = styled.footer`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors[theme.mode].background.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors[theme.mode].border.primary};
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
  font-size: ${({ theme }) => theme.typography.size.caption};
`

const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
  font-size: ${({ theme }) => theme.typography.size.caption};
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  }
`

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>© {currentYear} USA-KOR Stock. All rights reserved.</Copyright>
        <Links>
          <Link href="/privacy">개인정보처리방침</Link>
          <Link href="/terms">이용약관</Link>
          <Link href="/contact">문의하기</Link>
        </Links>
      </FooterContent>
    </FooterWrapper>
  )
} 