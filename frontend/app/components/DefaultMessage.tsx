// components/DefaultMessage.tsx
import React from 'react';
import Image from 'next/image';

const DefaultMessage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <Image
        src="https://s3-alpha-sig.figma.com/img/0d1c/8b00/68996fed4939313154cc7731010fa4f3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t4AUCZ-BPdAWeJf2Dcm75wCpJ9DVWR9vqlHfArF4SN6yf9nW8QMi9NEyQB5DaTGucBsxNgiMCgH-NRVTVUnrOH-JH9d8wDvC6zRpeQUMy0nFRvfL7NkDObMjp-ODjawcSxiJq-Cr4EG56Y~ihRovGy~ZV40gYaEGZycYMs0gNbx6QEFNqVjlZIzc89gxTpTtOQfDE0gl~9LR8jSAG8twBY4n3BnY~ju75JgUsb-5MZH1rlB0P-MqqB9MnWD9BNYAasqN9VseGQI2pVn2QQf6mxeBNfT-lnBwyjqvBOTBCHltSWLOTsPb~rN3CWj4qHJXdrzIpu~pEfjpmf1x8PNT4g__" // Replace with your background image
        alt="No Notes"
        width={200}
        height={200}
      />
      <p className="text-lg mt-4">I'm Just here waiting...</p>
    </div>
  );
};

export default DefaultMessage;
