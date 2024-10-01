const Footer = () => {
  return (
    <footer className='bg-black   '>
      <div className='container flex flex-col mx-auto py-4'>
        <div className='flex flex-row justify-between items-center'>
          <div className='text-[16px] text-[#6f7880]'>
            서울 특별시 강남구 봉은사로 30길 42 202호
          </div>
          <div className='text-[16px] text-[#6f7880]'>
            <div>Tel: 02-3661-0813</div>
          </div>
        </div>
        <hr className='my-4  border-[#6f7880]' />
        <div className='flex flex-row justify-between items-center'>
          <div className='text-[16px] text-[#6f7880]'>
            Copyright ©FiveWorks. All Rights Reserved.
          </div>
          <div className='text-[16px] text-[#6f7880] flex flex-col items-end'>
            <div>Fax: 02-3664-0813</div>
            <div>사업자번호: 261-88-01451</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
