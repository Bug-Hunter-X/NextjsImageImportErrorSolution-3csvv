```javascript
// pages/aboutSolution.js
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Image src="/images/profile.jpg" alt="Profile Picture" width={500} height={500} />
    </div>
  );
}
```