import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Lightbulb, Rocket, Zap} from 'lucide-react';

export default function Human() {
  return (
    <div className='container mx-auto px-4 py-8 my-[50px]'>
      <h1 className='text-4xl font-bold text-center mb-8'>혁신적인 인재</h1>
      <p className='text-xl text-center mb-12'>
        우리는 창의적이고 혁신적인 사고를 가진 인재를 찾고 있습니다.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-[100px]'>
        <Card>
          <CardHeader>
            <Lightbulb className='w-10  h-10 mb-4 text-primary' />
            <CardTitle>창의적 사고</CardTitle>
            <CardDescription>
              새로운 아이디어를 발굴하고 문제를 창의적으로 해결합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>기존의 틀을 벗어나 혁신적인 솔루션을 제시할 수 있는 능력을 중요하게 생각합니다.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Rocket className='w-10 h-10 mb-4 text-primary' />
            <CardTitle>도전 정신</CardTitle>
            <CardDescription>새로운 도전을 두려워하지 않고 끊임없이 성장합니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>불가능해 보이는 목표에 도전하고, 실패를 두려워하지 않는 인재를 원합니다.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className='w-10 h-10 mb-4 text-primary' />
            <CardTitle>빠른 적응력</CardTitle>
            <CardDescription>급변하는 환경에 신속하게 적응하고 대응합니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              기술과 시장의 변화에 민첩하게 대응하고, 새로운 기술을 빠르게 습득할 수 있는 능력이
              필요합니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
