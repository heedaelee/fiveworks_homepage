import {ReactNode} from 'react';
import {useTranslation} from 'react-i18next';

const tel = 'Tel: 02-3661-0813';
const email = 'email: 5works@5works.co.kr';
const fax = 'Fax: 02-3664-0813';
const copyright = 'Copyright ©FiveWorks. All Rights Reserved.';
const textStyle = 'text-[16px] text-[#6f7880]';

const Footer = () => {
  const {t} = useTranslation();

  return (
    <footer className='bg-black'>
      <div className='container flex flex-col mx-auto py-8'>
        <FooterSection>
          <FooterText>{t(`footer.address`)}</FooterText>
          <FooterText className='md:text-right'>
            <div>{tel}</div>
            <div>{email}</div>
          </FooterText>
        </FooterSection>
        <hr className='my-4  border-[#6f7880]' />
        <FooterSection>
          <FooterText>{copyright}</FooterText>
          <FooterText className='flex flex-col md:items-end'>
            <div>{fax}</div>
            <div>{t(`footer.businessNumber`)}</div>
          </FooterText>
        </FooterSection>
      </div>
    </footer>
  );
};

const FooterSection = ({children}: {children: ReactNode}) => (
  <div className='flex flex-col md:flex-row justify-between md:items-center pl-10 md:pl-0'>
    {children}
  </div>
);

const FooterText = ({children, className = ''}: {children: ReactNode; className?: string}) => (
  <div className={`${textStyle} ${className}`}>{children}</div>
);

export default Footer;
