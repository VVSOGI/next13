# template next 13

2023 07 20 - next 13 dynamic routing error fix

dynamic routing을 테스트 하던 도중에 페이지 라우팅은 되는데 이전 화면이 그대로 작성되어서 나오는 에러가 나와서 확인해본 결과, Layout에 Page를 직접 넣어줬는데 그렇게 되면 dynamic routing을 해도 해당 폴더의 Page에 상관없이, layout에 잡혀있는 page만을 찾아서 넣어준다. 그래서 layout에는 props로 받아오는 children을 받아서 컴포넌트를 보여줄 말단에 넣어주면 Page를 넣어준 효과와 같다.

---

(틀린 예시)

```tsx
import React, { Suspense } from 'react'
import Page from './page'
import { MainLayout } from '@/layout'

export default function layout() {
    return (
        <MainLayout>
            <Suspense fallback={<div>...</div>}>
                <Page />
            </Suspense>
        </MainLayout>
    )
}
```

(옳은 예시)

```tsx
import React, { Suspense } from 'react'
import { MainLayout } from '@/layout'

export default function layout({ children }: any) {
    return (
        <MainLayout>
            <Suspense fallback={<div>...</div>}>{children}</Suspense>
        </MainLayout>
    )
}
```
