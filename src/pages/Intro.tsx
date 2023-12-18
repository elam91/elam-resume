import { PageEnum } from "../apiClient/django/Api";
import useGetLongDescription from "../apiHooks/useGetLongDescription";

const Intro = () => {
  const { data, isFetching } = useGetLongDescription({ page: PageEnum.INTRO });
  return (
    <div className="w-full h-full  bg-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-500 min-h-full rounded-xl flex flex-col">
      {isFetching || !data ? (
        <div className="animate-pulse w-full h-full flex justify-center mt-10">
          <p className="text-5xl ">Loading...</p>
        </div>
      ) : (
        <div>
          <div
            className="p-5 prose text-gray-800 lg:prose-xl font-light prose-headings:font-extralight prose-li:marker:text-black  max-w-none"
            dangerouslySetInnerHTML={{ __html: data?.body || "" }}
          ></div>
          <div className="w-full flex flex-row justify-end px-10">
            <svg
              width="2310"
              height="1168"
              className="h-52 w-96 aspect-auto animate-signSvg"
              style={{ strokeDasharray: 14700 }}
              viewBox="0 0 2310 1168"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 1136.99C48.1821 1136.99 68.8743 1137.49 89.5233 1132.2C129.068 1122.06 164.721 1091.2 186.176 1059.53C205.405 1031.14 211.711 989.227 195.641 958.643C180.203 929.261 153.299 889.797 121.072 873.996C107.278 867.232 109.021 877.102 109.6 888.37C112.843 951.589 176.676 1010.19 223.461 1049.94C259.179 1080.3 302.822 1108.16 349.368 1121.81C373.687 1128.95 411.058 1133.8 433.114 1118.09C453.291 1103.71 461.604 1073.67 466.671 1051.94C475.214 1015.3 475.92 977.336 476.135 940.01C476.72 838.415 462.444 732.091 400.132 645.342C395.364 638.705 383.464 622.565 383.211 639.752C382.444 691.695 388.264 740.042 407.015 789.615C434.787 863.034 483.279 933.26 532.349 995.909C569.812 1043.74 617.009 1094.7 684.068 1102.38C725.75 1107.16 751.067 1095.5 770.97 1060.33C800.31 1008.47 816.371 951.878 823.168 893.96C827.71 855.252 831.665 812.382 825.606 773.644C823.072 757.442 811.946 738.063 793.484 733.45C732.021 718.092 743.38 825.057 753.905 852.967C774.7 908.112 819.896 959.789 873.502 990.319C906.268 1008.98 960.23 1024.75 995.394 1001.76C1037.85 974.016 1038.02 903.605 1038.7 861.086C1039.42 816.236 1044.23 767.929 1037.55 723.335C1033.62 697.052 1043.82 746.087 1044.72 748.755C1061.43 797.979 1083.63 858.375 1128.9 891.697C1138.12 898.48 1155.78 909.325 1167.91 902.211C1191.1 888.605 1192.64 849.51 1194.58 827.813C1199.31 774.782 1198.88 721.405 1198.88 668.234C1198.88 659.986 1209.11 681.817 1212.93 689.263C1227.75 718.106 1239.97 747.786 1253.23 777.237C1262.46 797.729 1284.77 857.869 1321.06 842.985C1332.02 838.492 1339.28 828.452 1348.59 821.823C1361.49 812.647 1377.81 809.172 1392.47 803.19C1458.48 776.263 1508.79 720.453 1550.79 668.234C1655.59 537.935 1733.71 391.039 1843.47 263.898C1886.09 214.532 1929.35 164.364 1982.43 124.683C2315 -123.939 1950.95 192.632 2283 23"
                stroke="black"
                strokeWidth="40"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
