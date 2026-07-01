const subjects = [
  {
    key: 'middle-info',
    name: '중학교 정보',
    summary: '정보 사회에서 필요한 기본 개념과 디지털 생활 습관을 익힙니다.',
    objective: '디지털 기술의 활용과 정보 사회의 변화에 대한 이해를 바탕으로, 문제 해결과 정보 윤리의 태도를 기른다.',
    concepts: [
      '정보사회에서 디지털 기술이 인간 생활과 사회에 미치는 영향을 이해한다.',
      '컴퓨팅 사고를 바탕으로 문제를 분해하고, 패턴을 찾고, 추상화하며, 알고리즘으로 해결하는 과정을 이해한다.',
      '자료와 정보의 특징을 비교하고, 다양한 매체를 통해 정보를 표현하고 전달하는 방법을 탐색한다.',
      '인터넷과 정보 통신 기술의 기본 원리와 정보보안의 필요성을 이해하고, 개인정보 보호와 디지털 윤리의 중요성을 학습한다.',
      '디지털 기기와 소프트웨어의 역할을 비교하고, 정보 활용의 효율성과 안전성을 판단하는 능력을 기른다.',
      '정보를 수집, 처리, 저장, 공유하는 과정에서 발생할 수 있는 문제와 해결 방안을 탐색한다.',
      '디지털 환경에서 책임 있는 정보 이용자이자 시민으로서의 태도를 갖는다.',
      '정보와 자료를 적절한 방식으로 탐색하고, 필요한 내용을 선택하여 활용하는 능력을 기른다.',
      '문제 상황에서 정보의 적합성과 신뢰성을 판단하고, 그 근거를 설명할 수 있어야 한다.',
      '디지털 기술을 활용한 협력과 소통의 방식과 그 의미를 이해한다.'
    ],
    standards: [
      '정보사회와 디지털 시민성에 대한 기본 이해를 바탕으로, 디지털 환경에서 책임 있는 생활을 실천할 수 있다.',
      '문제 상황을 분석하고, 적절한 절차와 도구를 활용하여 해결할 수 있다.',
      '자료와 정보를 다양한 방식으로 표현하고 전달하는 능력을 기를 수 있다.',
      '개인정보 보호와 디지털 윤리의 중요성을 인식하고 실천할 수 있다.',
      '정보를 탐색하고, 수집한 자료를 정리하여 필요한 정보를 선별하고 활용할 수 있다.',
      '정보의 특성과 활용 맥락을 비교하고, 적절한 정보 이용 방법을 제안할 수 있다.',
      '디지털 환경에서의 소통과 협업의 원리를 이해하고, 안전하고 책임 있는 참여 태도를 지닐 수 있다.'
    ],
    evaluation: [
      '개념 이해와 적용 능력을 중심으로 서술형, 단답형, 실습형 과제를 통해 평가한다.',
      '사례를 바탕으로 문제를 해결하는 과정과 결과를 함께 평가한다.',
      '디지털 윤리와 정보보안에 대한 태도도 함께 확인한다.',
      '정보를 탐색하고 활용한 과정과 결과를 기록해 제시하는 활동을 평가한다.',
      '문제 해결 과정에서 사용한 절차와 이유를 설명하는 능력을 확인한다.',
      '협업 상황에서 책임 있게 참여하고 성찰하는 태도도 함께 평가한다.'
    ],
    methods: [
      '실생활 사례를 활용해 개념을 이해하게 한다.',
      '문제 해결 과정을 단계적으로 경험하게 한다.',
      '협업과 토의 활동을 통해 정보 윤리와 디지털 시민성을 익히게 한다.',
      '다양한 정보 매체와 도구를 활용해 자료를 수집하고 비교하게 한다.',
      '개인정보 보호와 윤리적 이용의 필요성을 실제 상황과 연결해 논의하게 한다.',
      '학생 스스로 정보 활용과 문제 해결 과정을 설명하게 하여 성찰을 돕는다.'
    ],
    tips: [
      '시험에서는 정보의 특징, 디지털 윤리, 인터넷 서비스의 활용을 자주 묻습니다.',
      '개념을 단어로 외우기보다 실제 사례와 연결해 이해하면 좋습니다.',
      '정보의 유형과 특성을 구분하는 문제가 자주 출제됩니다.',
      '개인정보 보호와 인터넷 악성 행위의 예방 방법을 정리해 두면 좋습니다.'
    ],
    roadmap: [
      '핵심 개념과 용어를 먼저 확인한다.',
      '실생활 사례와 연결해 이해한다.',
      '문제 상황에서 적용해 설명해 본다.'
    ],
    examples: [
      '예: 개인정보 보호를 위해 비밀번호 관리와 로그아웃 습관을 실천한다.',
      '예: 디지털 환경에서 저작권과 예절을 지키는 태도를 설명한다.'
    ],
    quiz: [
      {
        type: 'short',
        question: '컴퓨팅 사고에서 문제를 작은 단위로 나누는 과정을 무엇이라고 하나요?',
        answer: '분해'
      },
      {
        type: 'essay',
        question: '인터넷 사용 시 개인정보 보호를 위해 지켜야 할 실천 방안을 두 가지 이상 서술하시오.',
        answer: '비밀번호를 안전하게 관리하고, 공용 기기에서는 로그아웃하며, 의심스러운 링크를 클릭하지 않는다.',
        keywords: ['비밀번호', '로그아웃', '의심', '링크']
      },
      {
        type: 'short',
        question: '인터넷에서 다른 사람의 정보를 훔치거나 악의적으로 사용하는 행위를 무엇이라고 하나요?',
        answer: '사이버 범죄'
      },
      {
        type: 'essay',
        question: '디지털 윤리 관점에서 올바른 정보 이용 태도를 두 가지 이상 서술하시오.',
        answer: '저작권을 존중하고, 타인의 개인정보를 함부로 공개하지 않으며, 사실 확인 후 정보를 공유한다.',
        keywords: ['저작권', '개인정보', '사실', '공유']
      },
      {
        type: 'short',
        question: '정보를 효율적으로 관리하고 전달하기 위해 기호나 그림으로 나타내는 방식을 무엇이라고 하나요?',
        answer: '표현'
      },
      {
        type: 'essay',
        question: '정보 사회에서 디지털 시민성의 의미를 서술하시오.',
        answer: '디지털 시민성은 디지털 환경에서 책임감 있게 참여하고, 규범을 지키며, 타인과 협력하는 태도이다.',
        keywords: ['책임', '규범', '협력', '태도']
      },
      {
        type: 'short',
        question: '인터넷에서 정보를 찾을 때 출처를 확인하는 이유는 무엇인가요?',
        answer: '신뢰성 확인'
      }
    ]
  },
  {
    key: 'high-info',
    name: '고등학교 정보',
    summary: '정보 처리와 자료 관리, 네트워크와 데이터 기반 의사결정의 핵심을 확인합니다.',
    objective: '데이터와 정보의 가치, 정보 통신의 원리, 자료 구조와 알고리즘의 의미를 이해하고 문제 해결 능력을 기른다.',
    concepts: [
      '정보와 데이터의 개념을 구분하고, 데이터의 수집, 저장, 처리, 분석, 표현 과정의 의미를 이해한다.',
      '데이터베이스와 자료 구조의 기본 개념을 이해하고, 자료를 효율적으로 저장하고 관리하는 방법을 학습한다.',
      '네트워크와 정보통신의 기본 원리를 이해하고, 정보가 전송되는 과정을 설명할 수 있다.',
      '문제 해결 과정에서 알고리즘과 절차를 설계하고, 자료의 구조와 표현 방식을 비교하여 효율적인 해결 방법을 탐색한다.',
      '정보 처리 과정에서 발생할 수 있는 문제를 분석하고, 적절한 도구와 절차를 적용하여 해결한다.',
      '정보 사회에서 데이터 기반 의사결정과 정보 활용의 가치에 대해 이해한다.',
      '정보를 효율적으로 저장하고 탐색할 수 있는 자료 구조의 종류와 특징을 비교한다.',
      '네트워크를 통해 정보가 이동하는 원리와 데이터 전송의 기본 개념을 탐구한다.',
      '데이터베이스에서 원하는 정보를 찾고 관리하는 방식의 의미를 이해한다.'
    ],
    standards: [
      '정보와 데이터의 차이를 이해하고, 수집과 처리의 과정을 설명할 수 있다.',
      '자료 구조와 알고리즘의 기본 개념을 이해하고, 효율적인 해결 전략을 제시할 수 있다.',
      '네트워크와 정보 통신의 원리를 설명하고, 정보 전송의 과정을 이해할 수 있다.',
      '데이터 기반 의사결정의 의미를 이해하고 활용할 수 있다.',
      '자료를 구조화하고 효율적으로 관리하는 방법을 비교하여 설명할 수 있다.',
      '문제 해결 상황에서 알고리즘의 순서와 절차를 설계하고 적용할 수 있다.',
      '정보 처리와 데이터 관리의 필요성을 사회적 맥락과 연결해 설명할 수 있다.'
    ],
    evaluation: [
      '개념의 이해와 용어의 정의를 중심으로 평가한다.',
      '알고리즘이나 자료 구조의 특징을 비교하는 문제를 통해 사고력을 확인한다.',
      '실제 사례를 바탕으로 정보 처리 과정을 설명하는 과제를 평가한다.',
      '데이터를 정리하고 해석하는 과정에서 사용한 방법과 이유를 설명하게 한다.',
      '네트워크와 데이터베이스의 구조를 이해한 정도를 확인한다.',
      '문제 해결의 절차와 결과를 종합적으로 평가한다.'
    ],
    methods: [
      '데이터와 정보의 관계를 사례로 설명하게 한다.',
      '알고리즘 설계 과정을 순차적으로 체험하게 한다.',
      '네트워크와 데이터베이스의 구조를 그림과 표로 정리하게 한다.',
      '자료를 표와 그래프로 나타내고 해석하는 활동을 진행하게 한다.',
      '정보 처리와 데이터 관리의 절차를 실제 문제에 적용하게 한다.',
      '학생들이 탐구한 결과를 발표하고 토의하게 한다.'
    ],
    tips: [
      '알고리즘의 효율성과 데이터 표현 방식은 자주 출제됩니다.',
      '용어의 정의와 특징을 비교하는 문제가 많으니 정리해 두면 좋습니다.',
      '데이터베이스의 구조와 관계형 데이터 모델을 확인해 두는 것이 유리합니다.',
      '네트워크의 기본 개념과 프로토콜의 역할을 암기해 두면 도움이 됩니다.'
    ],
    roadmap: [
      '정보와 데이터의 의미를 구분한다.',
      '자료 구조와 네트워크 구조를 비교해 본다.',
      '문제 해결 절차를 알고리즘으로 표현해 본다.'
    ],
    examples: [
      '예: 데이터를 표로 정리해 원하는 정보를 찾는 과정을 설명한다.',
      '예: 네트워크에서 패킷이 이동하는 과정을 순서대로 나타낸다.'
    ],
    quiz: [
      {
        type: 'short',
        question: '데이터베이스에서 같은 내용을 여러 번 저장하지 않고 효율적으로 관리하기 위한 방법은 무엇인가요?',
        answer: '정규화'
      },
      {
        type: 'essay',
        question: '네트워크에서 정보가 전달되는 기본 단위를 설명하고, 그 역할을 서술하시오.',
        answer: '패킷은 데이터를 작은 단위로 나누어 전송하는 기본 단위이다.',
        keywords: ['패킷', '전송', '단위']
      },
      {
        type: 'short',
        question: '데이터를 효율적으로 저장하고 관리하기 위해 관련된 정보를 표로 정리하는 구조를 무엇이라고 하나요?',
        answer: '테이블'
      },
      {
        type: 'essay',
        question: '알고리즘이 중요한 이유를 두 가지 이상 서술하시오.',
        answer: '알고리즘은 문제를 체계적으로 해결하고, 효율성과 정확성을 높이며, 반복 작업을 자동화한다.',
        keywords: ['체계적', '효율', '정확', '자동화']
      },
      {
        type: 'short',
        question: '컴퓨터가 문제를 해결하는 절차를 순서대로 표현한 것을 무엇이라고 하나요?',
        answer: '알고리즘'
      },
      {
        type: 'essay',
        question: '자료 구조가 중요한 이유를 서술하시오.',
        answer: '자료 구조는 데이터를 효율적으로 저장하고 관리하여 처리 속도와 활용성을 높인다.',
        keywords: ['저장', '관리', '속도', '활용']
      },
      {
        type: 'short',
        question: '네트워크에서 정보가 전달되는 경로를 결정하는 장치는 무엇인가요?',
        answer: '라우터'
      }
    ]
  },
  {
    key: 'ai-basic',
    name: '고등학교 인공지능 기초',
    summary: '인공지능의 기본 개념과 학습 방식, 윤리 문제를 다룹니다.',
    objective: '인공지능의 개념과 학습 방법을 이해하고, 데이터와 모델의 학습 과정을 통해 윤리적 활용의 필요성을 인식한다.',
    concepts: [
      '인공지능이 무엇인지 이해하고, 인간의 지능과 인공지능의 공통점과 차이점을 비교한다.',
      '지도학습, 비지도학습, 강화학습의 기본 개념과 특징을 구분하고, 각 학습 방식의 활용 사례를 탐색한다.',
      '머신러닝과 딥러닝의 관계를 이해하고, 데이터와 모델을 활용한 학습 과정의 의미를 파악한다.',
      'AI 모델의 학습 데이터, 성능 평가 지표, 일반화 가능성의 개념을 이해한다.',
      '인공지능의 편향, 프라이버시, 책임성, 공정성 문제를 탐색하고, 윤리적 사용의 필요성을 인식한다.',
      '인공지능 기술이 사회와 생활에 미치는 영향과 한계를 비판적으로 분석한다.',
      '인공지능 시스템이 학습하는 데이터의 특성과 품질이 결과에 미치는 영향을 이해한다.',
      '모델의 성능을 평가하는 기준과 한계를 설명할 수 있어야 한다.',
      'AI의 활용과 문제를 사회적 맥락에서 비판적으로 해석하는 태도를 기른다.'
    ],
    standards: [
      '인공지능의 기본 개념과 학습 방식의 차이를 설명할 수 있다.',
      '데이터와 모델을 활용한 학습 과정을 이해하고, 성능 평가의 의미를 설명할 수 있다.',
      '인공지능의 윤리적 문제와 사회적 영향에 대해 비판적으로 사고할 수 있다.',
      '개인정보 보호와 공정한 사용의 필요성을 인식하고 실천할 수 있다.',
      '인공지능의 학습 과정과 결과를 설명하며, 한계와 가능성을 비교할 수 있다.',
      'AI 시스템의 편향과 책임성 문제를 사례와 연결해 분석할 수 있다.',
      '인공지능 기술의 사회적 영향과 미래 가능성을 합리적으로 논의할 수 있다.'
    ],
    evaluation: [
      '학습 방식의 차이를 구분하는 문제로 이해도를 확인한다.',
      'AI 윤리와 편향 문제를 서술하는 과제를 통해 사고력을 확인한다.',
      '실제 사례와 연결해 인공지능의 한계를 설명하는 과정을 평가한다.',
      '학습 데이터의 품질과 모델 성능의 관계를 설명하는 능력을 확인한다.',
      '인공지능의 잠재적 문제와 해결 방안을 논리적으로 제시하는 과정을 평가한다.',
      '사회적 맥락에서 AI의 활용 가능성을 해석하는 태도를 확인한다.'
    ],
    methods: [
      '학습 방식별 사례를 비교하게 한다.',
      '데이터와 모델이 어떻게 학습하는지 시각적으로 설명하게 한다.',
      'AI 윤리와 사회적 영향에 대한 토의를 진행하게 한다.',
      '실제 활용 사례를 분석해 문제점과 개선 방향을 논의하게 한다.',
      '모델의 성능 평가 기준과 한계를 함께 살펴보게 한다.',
      '학생이 인공지능의 장점과 한계를 자신 있게 설명하게 한다.'
    ],
    tips: [
      '지도학습과 비지도학습의 차이는 항상 핵심 개념입니다.',
      'AI 윤리와 데이터 품질 문제도 시험에서 자주 다뤄집니다.',
      '모델의 성능을 평가할 때 정답률과 일반화 가능성을 함께 생각해 보아야 합니다.',
      '인공지능 도입 시 사회적 영향과 책임 문제를 함께 정리하면 좋습니다.'
    ],
    roadmap: [
      '인공지능의 개념과 학습 방식의 차이를 파악한다.',
      '모델의 학습 과정과 평가 기준을 이해한다.',
      '윤리적 문제와 사회적 영향까지 연결해 학습한다.'
    ],
    examples: [
      '예: 지도학습으로 이미지 분류 문제를 해결하는 과정을 설명한다.',
      '예: AI가 편향된 데이터를 학습했을 때 나타날 수 있는 문제를 분석한다.'
    ],
    quiz: [
      {
        type: 'short',
        question: '정답 레이블이 있는 데이터로 학습하는 방식을 무엇이라고 하나요?',
        answer: '지도학습'
      },
      {
        type: 'essay',
        question: 'AI 시스템이 편향된 데이터를 학습할 경우 발생할 수 있는 문제를 서술하시오.',
        answer: '편향된 데이터로 학습하면 결과가 불공정하거나 차별적일 수 있다.',
        keywords: ['편향', '불공정', '차별']
      },
      {
        type: 'short',
        question: '정답이 이미 주어진 데이터로 학습하는 인공지능의 학습 방식은 무엇인가요?',
        answer: '지도학습'
      },
      {
        type: 'essay',
        question: '인공지능 활용 시 개인정보 보호가 중요한 이유를 서술하시오.',
        answer: '개인정보가 유출되면 사생활 침해와 신뢰 저하로 이어질 수 있다.',
        keywords: ['개인정보', '유출', '사생활', '신뢰']
      },
      {
        type: 'short',
        question: '인공지능이 사람의 경험을 바탕으로 학습하는 방식 중 데이터와 정답이 함께 주어지는 학습 방법은 무엇인가요?',
        answer: '지도학습'
      },
      {
        type: 'essay',
        question: 'AI 윤리에서 공정성이 중요한 이유를 서술하시오.',
        answer: '공정성이 없으면 특정 집단에 불공정한 결과가 나타날 수 있어 사회적 갈등을 초래할 수 있다.',
        keywords: ['공정', '불공정', '집단', '갈등']
      },
      {
        type: 'short',
        question: '인공지능이 사람처럼 판단을 내리기 위해 사용하는 대표적인 데이터 기반 학습 방법은 무엇인가요?',
        answer: '머신러닝'
      }
    ]
  },
  {
    key: 'data-science',
    name: '데이터과학',
    summary: '데이터를 수집, 정리, 분석, 시각화하는 과정의 기초를 익힙니다.',
    objective: '데이터 과학의 전 과정을 이해하고, 데이터를 수집·정리·분석·해석하여 의사결정에 활용하는 능력을 기른다.',
    concepts: [
      '데이터의 수집, 정리, 분석, 해석, 표현의 전 과정을 이해하고, 데이터 과학의 목적과 활용 영역을 파악한다.',
      '데이터 전처리의 필요성과 방법을 이해하고, 결측값, 이상값, 중복값을 처리하는 기본 과정을 학습한다.',
      '기초 통계 개념인 평균, 중앙값, 분산, 표준편차, 분포의 의미를 이해하고, 데이터의 특징을 설명한다.',
      '그래프와 시각화를 활용하여 데이터의 패턴과 경향을 파악하고, 해석 결과를 설명한다.',
      '데이터 분석 결과를 사회적 맥락과 연결하여 해석하고, 의사결정에 활용하는 과정을 학습한다.',
      '데이터를 수집하기 전 질문의 목적과 분석 방향을 설정하는 과정의 중요성을 이해한다.',
      '수집된 데이터를 정리하고 요약하는 방식이 결과 해석에 미치는 영향을 이해한다.',
      '데이터를 시각화할 때 적절한 그래프를 선택하는 기준을 탐구한다.'
    ],
    standards: [
      '데이터 수집과 정리의 과정을 이해하고 설명할 수 있다.',
      '기초 통계와 시각화의 의미를 파악하고 데이터를 해석할 수 있다.',
      '분석 결과를 바탕으로 의사결정의 근거를 제시할 수 있다.',
      '데이터의 품질과 한계를 고려해 해석할 수 있다.',
      '질문과 목적에 따라 적절한 데이터 수집 방법을 선택할 수 있다.',
      '데이터의 패턴과 경향을 그래프와 수치를 통해 설명할 수 있다.',
      '분석 결과가 실제 문제 해결에 어떻게 활용되는지 설명할 수 있다.'
    ],
    evaluation: [
      '통계 개념과 시각화의 의미를 묻는 문제로 이해도를 확인한다.',
      '데이터 처리 과정의 적절성을 평가하는 과제를 제시한다.',
      '결과 해석의 타당성을 설명하는 과정을 중심으로 평가한다.',
      '데이터를 정리하고 시각화한 결과를 비교해 해석하는 능력을 확인한다.',
      '분석 과정에서 선택한 방법과 그 이유를 설명하게 한다.',
      '실생활 문제에 분석 결과를 적용해 논리적으로 제안하는 과정을 평가한다.'
    ],
    methods: [
      '실제 자료를 수집해 정리하는 활동을 한다.',
      '그래프를 그려 패턴을 해석하게 한다.',
      '분석 결과를 보고 의견을 나누는 토의를 진행한다.',
      '수집한 자료를 표와 그래프로 나타내고 비교하는 활동을 한다.',
      '데이터의 결측값과 이상값을 처리하는 과정을 실습하게 한다.',
      '학생이 분석한 결과를 발표하고 서로 피드백하게 한다.'
    ],
    tips: [
      '데이터의 품질이 분석 결과에 큰 영향을 준다는 점을 기억하세요.',
      '그래프의 종류와 목적을 연결해 이해하면 좋습니다.',
      '분석의 목적에 따라 적절한 통계 기법을 선택해야 합니다.',
      '수집된 데이터의 오류와 결측값을 확인하는 과정이 중요합니다.'
    ],
    roadmap: [
      '데이터를 수집하고 정리하는 과정을 이해한다.',
      '기초 통계와 시각화를 연결해 해석한다.',
      '분석 결과를 실생활 문제에 적용해 본다.'
    ],
    examples: [
      '예: 설문 조사 결과를 표와 그래프로 정리해 경향을 파악한다.',
      '예: 결측값과 이상값을 처리한 뒤 분석 결과를 비교한다.'
    ],
    quiz: [
      {
        type: 'short',
        question: '데이터 분석 전에 불필요한 값이나 오류를 다듬는 과정을 무엇이라고 하나요?',
        answer: '전처리'
      },
      {
        type: 'essay',
        question: '데이터의 중심 경향을 나타내는 대표값 중 하나를 골라 그 의미를 서술하시오.',
        answer: '평균은 데이터 값을 모두 더한 뒤 개수로 나눈 값이다.',
        keywords: ['평균', '값', '개수']
      },
      {
        type: 'short',
        question: '데이터에서 값이 비어 있거나 누락된 경우를 무엇이라고 하나요?',
        answer: '결측값'
      },
      {
        type: 'essay',
        question: '데이터 시각화가 중요한 이유를 서술하시오.',
        answer: '데이터 시각화는 패턴과 경향을 빠르게 파악하게 해주어 판단을 돕는다.',
        keywords: ['패턴', '경향', '판단', '돕는다']
      },
      {
        type: 'short',
        question: '데이터의 값이 얼마나 퍼져 있는지를 나타내는 대표적인 통계량은 무엇인가요?',
        answer: '분산'
      },
      {
        type: 'essay',
        question: '데이터 분석 과정에서 전처리가 중요한 이유를 서술하시오.',
        answer: '전처리는 오류와 이상값을 정리하여 분석 결과의 신뢰성을 높이기 때문이다.',
        keywords: ['오류', '이상값', '신뢰성', '높인다']
      },
      {
        type: 'short',
        question: '데이터를 한눈에 비교하기 위해 그림이나 그래프로 나타내는 활동을 무엇이라고 하나요?',
        answer: '시각화'
      }
    ]
  },
  {
    key: 'software-life',
    name: '소프트웨어 생활',
    summary: '소프트웨어를 이해하고 안전하게 사용하며, 협업과 설계의 기본을 다룹니다.',
    objective: '소프트웨어의 개발 과정과 안전한 사용의 필요성을 이해하고, 문제 해결과 협업에 필요한 태도를 기른다.',
    concepts: [
      '소프트웨어의 개념과 개발 과정, 유지보수의 의미를 이해하고, 소프트웨어가 사회와 생활에 어떻게 활용되는지 탐색한다.',
      '소프트웨어 개발에서 요구 분석, 설계, 구현, 테스트, 유지보수의 순서를 이해하고, 각 단계의 역할을 설명한다.',
      '버그의 원인을 찾고 수정하는 디버깅의 기본 과정을 학습하고, 문제 해결의 방법을 탐색한다.',
      '저작권, 이용약관, 개인정보 보호와 같은 디지털 윤리와 법적 측면의 중요성을 이해한다.',
      '안전한 소프트웨어 사용과 보안, 협업, 소통의 필요성을 인식하고 책임 있는 사용 태도를 기른다.',
      '소프트웨어가 실제 생활과 사회 문제를 해결하는 데 어떻게 활용되는지 이해한다.',
      '프로그램의 오류를 줄이기 위해 테스트와 검토가 필요한 이유를 이해한다.',
      '개발 과정에서 요구사항을 반영하고 수정하는 과정의 의미를 파악한다.'
    ],
    standards: [
      '소프트웨어 개발 과정의 흐름을 이해하고 설명할 수 있다.',
      '버그를 발견하고 수정하는 과정을 경험할 수 있다.',
      '저작권과 보안, 윤리의 중요성을 이해하고 안전하게 사용한다.',
      '협업과 소통을 통해 문제를 해결하는 태도를 기를 수 있다.',
      '소프트웨어의 요구사항을 파악하고 설계 과정에 반영할 수 있다.',
      '디버깅과 테스트를 통해 문제를 개선하는 방법을 설명할 수 있다.',
      '안전하고 책임 있는 소프트웨어 사용 태도를 실천할 수 있다.'
    ],
    evaluation: [
      '개발 과정의 단계와 역할을 묻는 문제로 이해도를 확인한다.',
      '디버깅과 문제 해결 과정을 설명하는 과제를 평가한다.',
      '저작권과 보안의 중요성을 서술하는 과정을 중심으로 확인한다.',
      '소프트웨어 설계와 구현 단계에서의 선택 이유를 설명하게 한다.',
      '테스트와 수정 과정을 통해 개선된 결과를 평가한다.',
      '협업과 윤리적 사용 태도를 함께 확인한다.'
    ],
    methods: [
      '소프트웨어의 개발 단계를 순서대로 정리하게 한다.',
      '작은 문제를 해결하는 실습을 통해 디버깅을 경험하게 한다.',
      '협업과 윤리적 사용에 대한 토의를 진행하게 한다.',
      '요구사항을 분석하고 설계하는 활동을 통해 개발 과정을 경험하게 한다.',
      '테스트와 수정 과정을 반복하며 문제 해결 능력을 기르게 한다.',
      '개발 결과를 발표하고 피드백하는 활동을 통합한다.'
    ],
    tips: [
      '소프트웨어는 설계, 구현, 테스트, 유지보수의 순서로 이해하면 좋습니다.',
      '저작권과 윤리 문제는 실제 생활과 연결해 기억하는 것이 효과적입니다.',
      '버그를 분석할 때 원인과 재현 과정을 분리해서 생각하면 도움이 됩니다.',
      '소프트웨어 사용 시 이용약관과 보안 정책을 확인하는 습관이 중요합니다.'
    ],
    roadmap: [
      '소프트웨어의 개발 과정을 순서대로 이해한다.',
      '버그와 문제를 찾는 방법을 익힌다.',
      '법적·윤리적 측면까지 포함해 안전하게 사용한다.'
    ],
    examples: [
      '예: 앱 개발 과정에서 요구 분석과 테스트 단계의 역할을 설명한다.',
      '예: 저작권을 존중하며 안전하게 소프트웨어를 사용하는 태도를 정리한다.'
    ],
    quiz: [
      {
        type: 'short',
        question: '프로그램에서 오류를 찾고 수정하는 과정을 무엇이라고 하나요?',
        answer: '디버깅'
      },
      {
        type: 'essay',
        question: '소프트웨어를 사용할 때 저작권을 존중해야 하는 이유를 서술하시오.',
        answer: '저작권을 존중하지 않으면 창작자의 권리가 침해될 수 있다.',
        keywords: ['저작권', '권리', '침해']
      },
      {
        type: 'short',
        question: '프로그램의 오류를 찾아 수정하는 과정을 무엇이라고 하나요?',
        answer: '디버깅'
      },
      {
        type: 'essay',
        question: '소프트웨어를 안전하게 사용하기 위해 지켜야 할 태도를 서술하시오.',
        answer: '정식 인증된 프로그램을 사용하고, 개인 정보 보호와 보안 정책을 지켜야 한다.',
        keywords: ['인증', '개인정보', '보안', '정책']
      },
      {
        type: 'short',
        question: '소프트웨어가 사용자의 요구를 만족시키도록 설계하고 구현하는 과정을 무엇이라고 하나요?',
        answer: '개발'
      },
      {
        type: 'essay',
        question: '소프트웨어 유지보수가 중요한 이유를 서술하시오.',
        answer: '유지보수는 소프트웨어의 오류를 수정하고 성능을 개선하며, 변화하는 환경에 적응하게 한다.',
        keywords: ['오류', '성능', '개선', '환경']
      },
      {
        type: 'short',
        question: '소프트웨어를 무단으로 복제하거나 배포하는 행위는 무엇과 관련이 있나요?',
        answer: '저작권'
      }
    ]
  }
];

const pageType = document.body.dataset.page || (window.location.pathname.includes('quiz') ? 'quiz' : 'study');
const initialSubject = subjects[0].key;
let currentSubject = initialSubject;
let currentView = 'goal';

function renderTabs() {
  const tabBar = document.getElementById('subjectTabs');
  if (!tabBar) return;
  tabBar.innerHTML = subjects.map((subject) => `
    <button class="tab-btn ${subject.key === currentSubject ? 'active' : ''}" data-subject="${subject.key}">
      ${subject.name}
    </button>
  `).join('');

  tabBar.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      currentSubject = button.dataset.subject;
      renderTabs();
      if (pageType === 'study') {
        renderStudy();
      } else {
        renderQuiz();
      }
    });
  });
}

const studyViews = [
  { key: 'goal', label: '1. 성격·목표' },
  { key: 'content', label: '2. 내용체계' },
  { key: 'standard', label: '2. 성취기준' },
  { key: 'teach', label: '3. 교수·학습' },
  { key: 'evaluation', label: '3. 평가' }
];

function renderStudyViewTabs() {
  const container = document.getElementById('studyViewTabs');
  if (!container) return;
  container.innerHTML = studyViews.map((view) => `
    <button class="sub-tab ${currentView === view.key ? 'active' : ''}" data-view="${view.key}">${view.label}</button>
  `).join('');

  container.querySelectorAll('.sub-tab').forEach((button) => {
    button.addEventListener('click', () => {
      currentView = button.dataset.view;
      renderStudyViewTabs();
      renderStudy();
    });
  });
}

function stripNumberPrefix(text) {
  return text.replace(/^\(\d+\)\s*/, '');
}

function renderStudy() {
  const container = document.getElementById('studyContent');
  if (!container) return;
  const subject = subjects.find((item) => item.key === currentSubject) || subjects[0];
  const curriculum = (typeof curriculumFull !== 'undefined'
    ? curriculumFull.find((item) => item.key === currentSubject)
    : null);

  let contentHtml = '';

  if (!curriculum) {
    contentHtml = '<p>교육과정 원문 데이터를 불러오지 못했습니다.</p>';
  } else if (currentView === 'goal') {
    contentHtml = `
      <h4>가. 성격</h4>
      ${curriculum.personality.map((p) => `<p>${p}</p>`).join('')}
      <h4>나. 목표</h4>
      ${curriculum.goalIntro.map((p) => `<p>${p}</p>`).join('')}
      <ol>
        ${curriculum.goalItems.map((item) => `<li>${stripNumberPrefix(item)}</li>`).join('')}
      </ol>
    `;
  } else if (currentView === 'content') {
    contentHtml = curriculum.contentAreas.map((area, index) => `
      <div class="area-block">
        <h4>(${index + 1}) ${area.name}</h4>
        <p class="area-label">핵심 아이디어</p>
        <ul>
          ${area.coreIdeas.map((idea) => `<li>${idea}</li>`).join('')}
        </ul>
        <div class="study-highlights study-highlights-3">
          <div class="study-highlight-card">
            <h4>지식·이해</h4>
            <ul>${area.knowledge.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div class="study-highlight-card">
            <h4>과정·기능</h4>
            <ul>${area.process.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div class="study-highlight-card">
            <h4>가치·태도</h4>
            <ul>${area.values.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
        </div>
      </div>
    `).join('');
  } else if (currentView === 'standard') {
    contentHtml = curriculum.standardAreas.map((area, index) => `
      <div class="area-block">
        <h4>(${index + 1}) ${area.name}</h4>
        <p class="area-label">성취기준</p>
        <ul>
          ${area.standards.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        ${area.explanations.length ? `
          <p class="area-label">성취기준 해설</p>
          <ul>${area.explanations.map((item) => `<li>${item}</li>`).join('')}</ul>
        ` : ''}
        ${area.considerations.length ? `
          <p class="area-label">성취기준 적용 시 고려 사항</p>
          <ul>${area.considerations.map((item) => `<li>${item}</li>`).join('')}</ul>
        ` : ''}
      </div>
    `).join('');
  } else if (currentView === 'teach') {
    contentHtml = `
      <h4>(1) 교수·학습의 방향</h4>
      <ul>${curriculum.teachDirection.map((item) => `<li>${item}</li>`).join('')}</ul>
      <h4>(2) 교수·학습 방법</h4>
      <ul>${curriculum.teachMethod.map((item) => `<li>${item}</li>`).join('')}</ul>
    `;
  } else {
    contentHtml = `
      <h4>(1) 평가의 방향</h4>
      <ul>${curriculum.evalDirection.map((item) => `<li>${item}</li>`).join('')}</ul>
      <h4>(2) 평가 방법</h4>
      <ul>${curriculum.evalMethod.map((item) => `<li>${item}</li>`).join('')}</ul>
    `;
  }

  container.innerHTML = `
    <article class="subject-panel">
      <h3>${subject.name}</h3>
      <p>${subject.summary}</p>
      ${contentHtml}
    </article>
  `;
}

function normalizeAnswer(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^가-힣a-z0-9]/g, '');
}

function checkQuizAnswer(item, userInput) {
  const trimmed = userInput.trim();
  if (!trimmed) {
    return { correct: false, message: '답안을 입력해 주세요.' };
  }

  const normalizedInput = normalizeAnswer(trimmed);
  const normalizedAnswer = normalizeAnswer(item.answer);

  if (item.type === 'short') {
    const correct = normalizedInput.includes(normalizedAnswer) || normalizedAnswer.includes(normalizedInput);
    return {
      correct,
      message: correct ? '정답입니다!' : '오답입니다.'
    };
  }

  const keywords = (item.keywords || []).map((keyword) => normalizeAnswer(keyword));
  const matchCount = keywords.filter((keyword) => normalizedInput.includes(keyword)).length;
  const correct = matchCount >= Math.min(2, Math.max(1, keywords.length));

  return {
    correct,
    message: correct ? '정답입니다!' : '오답입니다.'
  };
}

function renderQuiz() {
  const container = document.getElementById('quizContent');
  const guide = document.getElementById('quizGuide');
  if (!container) return;
  const subject = subjects.find((item) => item.key === currentSubject) || subjects[0];

  if (guide) {
    guide.innerHTML = `
      <h3>${subject.name} 퀴즈 안내</h3>
      <p>${subject.summary}</p>
      <ul>
        <li>단답형은 핵심 용어를 먼저 떠올려 보세요.</li>
        <li>서술형은 개념과 사례를 연결해 설명해 보세요.</li>
        <li>정답 확인 후 모범 답안을 비교하며 복습해 보세요.</li>
      </ul>
    `;
  }

  container.innerHTML = `
    <div class="quiz-list">
      ${subject.quiz.map((item, index) => `
        <article class="quiz-card">
          <h3>${index + 1}. ${item.question}</h3>
          <p class="quiz-type">${item.type === 'essay' ? '서술형' : '단답형'}</p>
          ${item.type === 'essay'
            ? '<textarea class="quiz-input" rows="4" placeholder="서술형 답안을 입력하세요."></textarea>'
            : '<input class="quiz-input" type="text" placeholder="짧은 답을 입력하세요." />'}
          <button class="submit-btn" type="button">정답 확인</button>
          <div class="feedback" id="feedback-${subject.key}-${index}"></div>
          <div class="answer-box" id="answer-${subject.key}-${index}"></div>
        </article>
      `).join('')}
    </div>
  `;

  subject.quiz.forEach((item, index) => {
    const card = container.querySelectorAll('.quiz-card')[index];
    const input = card.querySelector('.quiz-input');
    const button = card.querySelector('.submit-btn');
    const feedback = container.querySelector(`#feedback-${subject.key}-${index}`);
    const answerBox = container.querySelector(`#answer-${subject.key}-${index}`);

    button.addEventListener('click', () => {
      const result = checkQuizAnswer(item, input.value);
      feedback.className = `feedback ${result.correct ? 'correct' : 'wrong'}`;
      feedback.textContent = result.message;
      answerBox.textContent = result.correct ? '' : `모범 답안: ${item.answer}`;
    });
  });
}

if (pageType === 'study') {
  renderTabs();
  renderStudyViewTabs();
  renderStudy();
} else {
  document.body.dataset.page = 'quiz';
  renderTabs();
  renderQuiz();
}
