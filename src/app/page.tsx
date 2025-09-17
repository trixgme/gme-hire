import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gme-gradient rounded-full"></div>
              <span className="text-xl font-bold">GME Remit</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#culture" className="text-sm font-medium hover:text-primary transition-colors">회사문화</a>
              <a href="#positions" className="text-sm font-medium hover:text-primary transition-colors">채용공고</a>
              <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">채용과정</a>
              <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">복리후생</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gme-gradient py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            글로벌 송금의 미래를<br />
            함께 만들어갈 인재를 찾습니다
          </h1>
          <p className="text-xl mb-8 opacity-90">
            대한민국 No.1 송금 서비스 GME Remit에서<br />
            혁신적인 핀테크 솔루션을 만들어나갈 동료를 기다립니다
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              채용공고 보기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent">
              회사 소개서 다운로드
            </Button>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section id="culture" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">GME의 핵심 가치</h2>
            <p className="text-xl text-muted-foreground">
              혁신과 신뢰를 바탕으로 글로벌 금융 서비스의 새로운 기준을 만들어갑니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gme-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">혁신적 사고</h3>
                <p className="text-muted-foreground">
                  새로운 기술과 아이디어로<br />금융 서비스의 한계를 뛰어넘습니다
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gme-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3">고객 중심</h3>
                <p className="text-muted-foreground">
                  고객의 니즈를 최우선으로<br />최고의 서비스를 제공합니다
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gme-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">속도와 효율</h3>
                <p className="text-muted-foreground">
                  빠르고 정확한 서비스로<br />고객의 시간을 소중히 합니다
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gme-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-3">글로벌 비전</h3>
                <p className="text-muted-foreground">
                  세계를 무대로<br />글로벌 리더로 성장합니다
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Positions Section */}
      <section id="positions" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">채용 포지션</h2>
            <p className="text-xl text-muted-foreground">
              다양한 분야에서 함께 성장할 동료를 찾고 있습니다
            </p>
          </div>

          <Tabs defaultValue="development" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="development">개발</TabsTrigger>
              <TabsTrigger value="design">디자인</TabsTrigger>
              <TabsTrigger value="business">비즈니스</TabsTrigger>
              <TabsTrigger value="operations">운영</TabsTrigger>
            </TabsList>

            <TabsContent value="development" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Senior Frontend Developer</CardTitle>
                      <Badge variant="destructive">신규</Badge>
                    </div>
                    <CardDescription>React, TypeScript, Next.js</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        사용자 경험을 최우선으로 하는 웹 서비스 개발
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Next.js</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">경력 3-7년</span>
                        <Button size="sm">지원하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Backend Developer</CardTitle>
                      <Badge>상시모집</Badge>
                    </div>
                    <CardDescription>Java, Spring Boot, Microservices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        대용량 트래픽을 처리하는 안정적인 백엔드 시스템 구축
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Java</Badge>
                        <Badge variant="secondary">Spring Boot</Badge>
                        <Badge variant="secondary">AWS</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">경력 2-5년</span>
                        <Button size="sm">지원하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>DevOps Engineer</CardTitle>
                      <Badge variant="destructive">신규</Badge>
                    </div>
                    <CardDescription>AWS, Kubernetes, CI/CD</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        클라우드 인프라 구축 및 자동화 시스템 운영
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">AWS</Badge>
                        <Badge variant="secondary">Kubernetes</Badge>
                        <Badge variant="secondary">Docker</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">경력 3-6년</span>
                        <Button size="sm">지원하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Mobile Developer</CardTitle>
                      <Badge>상시모집</Badge>
                    </div>
                    <CardDescription>React Native, iOS, Android</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        크로스 플랫폼 모바일 앱 개발 및 최적화
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React Native</Badge>
                        <Badge variant="secondary">iOS</Badge>
                        <Badge variant="secondary">Android</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">경력 2-5년</span>
                        <Button size="sm">지원하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="design" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>UX/UI Designer</CardTitle>
                      <Badge variant="destructive">신규</Badge>
                    </div>
                    <CardDescription>User Experience, Interface Design</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        사용자 중심의 직관적인 인터페이스 설계
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Figma</Badge>
                        <Badge variant="secondary">Sketch</Badge>
                        <Badge variant="secondary">Prototyping</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">경력 3-6년</span>
                        <Button size="sm">지원하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Product Designer</CardTitle>
                      <Badge>상시모집</Badge>
                    </div>
                    <CardDescription>Product Strategy, Design System</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        제품 전략과 디자인 시스템 구축
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Design System</Badge>
                        <Badge variant="secondary">User Research</Badge>
                        <Badge variant="secondary">Strategy</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">경력 4-8년</span>
                        <Button size="sm">지원하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="business" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Business Development</CardTitle>
                      <Badge variant="destructive">신규</Badge>
                    </div>
                    <CardDescription>Partnership, Strategy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        글로벌 파트너십 구축 및 사업 개발
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Partnership</Badge>
                        <Badge variant="secondary">Strategy</Badge>
                        <Badge variant="secondary">Global</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">경력 3-7년</span>
                        <Button size="sm">지원하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Product Manager</CardTitle>
                      <Badge>상시모집</Badge>
                    </div>
                    <CardDescription>Product Strategy, Analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        제품 기획 및 전략 수립, 데이터 분석
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Analytics</Badge>
                        <Badge variant="secondary">Strategy</Badge>
                        <Badge variant="secondary">Planning</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">경력 4-8년</span>
                        <Button size="sm">지원하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="operations" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Customer Success</CardTitle>
                      <Badge>상시모집</Badge>
                    </div>
                    <CardDescription>Customer Support, Success</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        고객 만족도 향상 및 성공 지원
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Customer Care</Badge>
                        <Badge variant="secondary">Communication</Badge>
                        <Badge variant="secondary">Analysis</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">경력 2-5년</span>
                        <Button size="sm">지원하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>HR Specialist</CardTitle>
                      <Badge variant="destructive">신규</Badge>
                    </div>
                    <CardDescription>Talent Acquisition, Culture</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        인재 채용 및 조직 문화 구축
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Recruitment</Badge>
                        <Badge variant="secondary">Culture</Badge>
                        <Badge variant="secondary">People</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">경력 3-6년</span>
                        <Button size="sm">지원하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">채용 과정</h2>
            <p className="text-xl text-muted-foreground">
              투명하고 공정한 채용 과정을 통해 최적의 인재를 선발합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">서류 접수</h3>
              <p className="text-muted-foreground">
                지원서 작성 및<br />포트폴리오 제출
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">서류 검토</h3>
              <p className="text-muted-foreground">
                전문성과 경험을<br />종합적으로 평가
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">면접 진행</h3>
              <p className="text-muted-foreground">
                실무진과의 깊이 있는<br />대화와 평가
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">최종 합격</h3>
              <p className="text-muted-foreground">
                합격 통보 및<br />입사 절차 안내
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-white rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-center">채용 일정 안내</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">📝 서류 접수</h4>
                <p className="text-muted-foreground mb-4">상시 접수 가능 (포지션별 마감일 상이)</p>

                <h4 className="font-semibold mb-2">📋 서류 검토</h4>
                <p className="text-muted-foreground mb-4">접수 후 1주 이내 검토 및 결과 통보</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💬 면접 진행</h4>
                <p className="text-muted-foreground mb-4">서류 합격 후 1주 이내 면접 일정 조율</p>

                <h4 className="font-semibold mb-2">🎉 최종 발표</h4>
                <p className="text-muted-foreground">면접 후 3일 이내 최종 결과 통보</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">복리후생</h2>
            <p className="text-xl text-muted-foreground">
              직원들의 성장과 행복을 위한 다양한 혜택을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold">경쟁력 있는 연봉</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 업계 최고 수준의 연봉</li>
                  <li>• 성과에 따른 인센티브</li>
                  <li>• 주식 옵션 제공</li>
                  <li>• 정기 연봉 협상</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🏖️</span>
                  </div>
                  <h3 className="text-xl font-bold">워라밸</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 유연 근무제</li>
                  <li>• 재택근무 지원</li>
                  <li>• 연차 자유 사용</li>
                  <li>• 리프레시 휴가</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-xl font-bold">성장 지원</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 교육비 지원</li>
                  <li>• 컨퍼런스 참가비</li>
                  <li>• 도서 구입비</li>
                  <li>• 사내 스터디 운영</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <h3 className="text-xl font-bold">식사 지원</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 점심 식대 지원</li>
                  <li>• 사내 카페 운영</li>
                  <li>• 간식 무료 제공</li>
                  <li>• 회식비 지원</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-bold">건강 관리</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 종합 건강검진</li>
                  <li>• 단체 보험 가입</li>
                  <li>• 헬스케어 서비스</li>
                  <li>• 마사지 서비스</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <h3 className="text-xl font-bold">사내 시설</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 게임 라운지</li>
                  <li>• 휴게 공간</li>
                  <li>• 수면실</li>
                  <li>• 피트니스 센터</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gme-gradient text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            함께 성장할 준비가 되셨나요?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            GME Remit에서 글로벌 핀테크의 미래를 만들어가세요
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              전체 채용공고 보기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent">
              입사 지원하기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 gme-gradient rounded-full"></div>
                <span className="font-bold text-lg">GME Remit</span>
              </div>
              <p className="text-gray-400">
                대한민국 No.1 송금 서비스<br />
                글로벌 금융의 새로운 기준
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">채용 정보</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#positions" className="hover:text-white transition-colors">채용공고</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">채용과정</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">복리후생</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">회사 소개</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#culture" className="hover:text-white transition-colors">회사문화</a></li>
                <li><a href="https://www.gmeremit.com" className="hover:text-white transition-colors">공식 웹사이트</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 careers@gmeremit.com</li>
                <li>📞 02-1234-5678</li>
                <li>📍 서울시 강남구</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 GME Remit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
