import RobotoMonoBold from "@/assets/roboto-mono-700.ttf";
import RobotoMono from "@/assets/roboto-mono-regular.ttf";
import { getAllPosts } from "@/data/post";
import { siteConfig } from "@/site.config";
import { getFormattedDate } from "@/utils/date";
import { Resvg } from "@resvg/resvg-js";
import type { APIContext, InferGetStaticPropsType } from "astro";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";

const ogOptions: SatoriOptions = {
	// debug: true,
	fonts: [
		{
			data: Buffer.from(RobotoMono),
			name: "Roboto Mono",
			style: "normal",
			weight: 400,
		},
		{
			data: Buffer.from(RobotoMonoBold),
			name: "Roboto Mono",
			style: "normal",
			weight: 700,
		},
	],
	height: 630,
	width: 1200,
};

const markup = (title: string, pubDate: string) =>
	html`<div tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]">
		<div tw="flex flex-col flex-1 w-full p-10 justify-center">
			<p tw="text-2xl mb-6">${pubDate}</p>
			<h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
		</div>
		<div tw="flex items-center justify-between w-full p-10 border-t border-[#2bbc89] text-xl">
        <svg
          version="1.1"
          width="100px"
          height="104px"
          style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
          id="svg62"
          sodipodi:docname="logo-db-screenshot.svg"
          inkscape:version="1.1.2 (0a00cf5339, 2022-02-04)"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg">
          <defs
            id="defs66">
            <inkscape:perspective
              sodipodi:type="inkscape:persp3d"
              inkscape:vp_x="8.9847182 : 167.83805 : 1"
              inkscape:vp_y="0 : 1000 : 0"
              inkscape:vp_z="-6.7988972 : 115.12312 : 1"
              inkscape:persp3d-origin="165 : 111.33333 : 1"
              id="perspective96" />
          </defs>
          <sodipodi:namedview
            id="namedview64"
            pagecolor="#ffffff"
            bordercolor="#666666"
            borderopacity="1.0"
            inkscape:pageshadow="2"
            inkscape:pageopacity="0.0"
            inkscape:pagecheckerboard="0"
            showgrid="false"
            inkscape:zoom="2.511976"
            inkscape:cx="165.00954"
            inkscape:cy="168.39333"
            inkscape:window-width="1920"
            inkscape:window-height="1011"
            inkscape:window-x="0"
            inkscape:window-y="32"
            inkscape:window-maximized="1"
            inkscape:current-layer="svg62" />
          <g
            id="g8">
            <path
              style="opacity:1"
              fill="#ff5e04"
              d="M 239.5,32.5 C 228.426,35.969 217.426,39.6357 206.5,43.5C 195.017,39.6737 183.683,35.6737 172.5,31.5C 183.66,27.3336 194.993,23.3336 206.5,19.5C 215.796,22.7654 225.13,25.9321 234.5,29C 236.76,29.5494 238.426,30.716 239.5,32.5 Z"
              id="path6" />
          </g>
          <g
            id="g12">
            <path
              style="opacity:1"
              fill="#b04304"
              d="M 172.5,31.5 C 183.683,35.6737 195.017,39.6737 206.5,43.5C 206.5,90.1667 206.5,136.833 206.5,183.5C 194.819,179.995 183.319,175.995 172,171.5C 171.168,124.665 171.335,77.9982 172.5,31.5 Z"
              id="path10" />
          </g>
          <g
            id="g16">
            <path
              style="opacity:1"
              fill="#53c683"
              d="M 241.5,101.5 C 241.334,109.507 241.5,117.507 242,125.5C 265.061,117.202 288.228,109.202 311.5,101.5C 312.665,147.998 312.832,194.665 312,241.5C 277.333,253.5 242.667,265.5 208,277.5C 207.5,261.837 207.333,246.17 207.5,230.5C 231.132,223.068 254.465,215.068 277.5,206.5C 277.833,190.819 277.499,175.152 276.5,159.5C 275.893,159.624 275.56,159.957 275.5,160.5C 263.865,163.932 252.532,167.932 241.5,172.5C 229.79,175.959 218.123,179.625 206.5,183.5C 206.5,136.833 206.5,90.1667 206.5,43.5C 217.426,39.6357 228.426,35.969 239.5,32.5C 240.117,32.3893 240.617,32.056 241,31.5C 241.5,54.831 241.667,78.1643 241.5,101.5 Z"
              id="path14" />
          </g>
          <g
            id="g20">
            <path
              style="opacity:1"
              fill="#ff5e04"
              d="M 161.5,57.5 C 150.301,61.5664 138.967,65.233 127.5,68.5C 115.761,65.0314 104.095,61.3647 92.5,57.5C 103.793,52.7348 115.459,48.7348 127.5,45.5C 139.136,48.9323 150.469,52.9323 161.5,57.5 Z"
              id="path18" />
          </g>
          <g
            id="g24">
            <path
              style="opacity:1"
              fill="#b04304"
              d="M 92.5,57.5 C 104.095,61.3647 115.761,65.0314 127.5,68.5C 127.832,100.338 127.498,132.004 126.5,163.5C 115.607,158.534 104.274,154.534 92.5,151.5C 92.5,120.167 92.5,88.8333 92.5,57.5 Z"
              id="path22" />
          </g>
          <g
            id="g28">
            <path
              style="opacity:1"
              fill="#53c683"
              d="M 161.5,57.5 C 162.831,104.002 162.831,150.668 161.5,197.5C 138.5,205.5 115.5,213.5 92.5,221.5C 91.503,228.468 91.1697,235.468 91.5,242.5C 91.169,250.528 91.5023,258.528 92.5,266.5C 115.34,258.666 138.007,250.666 160.5,242.5C 162.484,257.798 163.151,273.464 162.5,289.5C 126.972,300.898 91.6391,312.898 56.5,325.5C 56.172,279.095 56.5054,232.761 57.5,186.5C 80.5738,179.031 103.574,171.364 126.5,163.5C 127.498,132.004 127.832,100.338 127.5,68.5C 138.967,65.233 150.301,61.5664 161.5,57.5 Z"
              id="path26" />
          </g>
          <g
            id="g32">
            <path
              style="opacity:1"
              fill="#fe5f05"
              d="M 311.5,101.5 C 288.228,109.202 265.061,117.202 242,125.5C 241.5,117.507 241.334,109.507 241.5,101.5C 253.273,96.909 265.273,92.909 277.5,89.5C 289.32,92.5485 300.653,96.5485 311.5,101.5 Z"
              id="path30" />
          </g>
          <g
            id="g36">
            <path
              style="opacity:1"
              fill="#ff5d03"
              d="M 92.5,151.5 C 104.274,154.534 115.607,158.534 126.5,163.5C 103.574,171.364 80.5738,179.031 57.5,186.5C 45.3747,183.236 33.3747,179.569 21.5,175.5C 44.8073,166.73 68.4739,158.73 92.5,151.5 Z"
              id="path34" />
          </g>
          <g
            id="g40">
            <path
              style="opacity:1"
              fill="#af4304"
              d="M 275.5,160.5 C 276.496,175.658 276.83,190.991 276.5,206.5C 265.021,202.229 253.354,198.562 241.5,195.5C 241.5,187.833 241.5,180.167 241.5,172.5C 252.532,167.932 263.865,163.932 275.5,160.5 Z"
              id="path38" />
          </g>
          <g
            id="g44">
            <path
              style="opacity:1"
              fill="#e0baa3"
              d="M 275.5,160.5 C 275.56,159.957 275.893,159.624 276.5,159.5C 277.499,175.152 277.833,190.819 277.5,206.5C 277.167,206.5 276.833,206.5 276.5,206.5C 276.83,190.991 276.496,175.658 275.5,160.5 Z"
              id="path42" />
          </g>
          <g
            id="g48">
            <path
              style="opacity:1"
              fill="#b04304"
              d="M 21.5,175.5 C 33.3747,179.569 45.3747,183.236 57.5,186.5C 56.5054,232.761 56.172,279.095 56.5,325.5C 44.9742,321.602 33.4742,317.602 22,313.5C 21.5,267.501 21.3333,221.501 21.5,175.5 Z"
              id="path46" />
          </g>
          <g
            id="g52">
            <path
              style="opacity:1"
              fill="#fe5d02"
              d="M 241.5,195.5 C 253.354,198.562 265.021,202.229 276.5,206.5C 276.833,206.5 277.167,206.5 277.5,206.5C 254.465,215.068 231.132,223.068 207.5,230.5C 207.167,230.5 206.833,230.5 206.5,230.5C 194.905,226.635 183.239,222.969 171.5,219.5C 194.556,210.986 217.889,202.986 241.5,195.5 Z"
              id="path50" />
          </g>
          <g
            id="g56">
            <path
              style="opacity:1"
              fill="#b04305"
              d="M 171.5,219.5 C 183.239,222.969 194.905,226.635 206.5,230.5C 206.833,246.181 206.499,261.848 205.5,277.5C 194.355,273.396 183.188,269.396 172,265.5C 171.5,250.17 171.333,234.837 171.5,219.5 Z"
              id="path54" />
          </g>
          <g
            id="g60">
            <path
              style="opacity:1"
              fill="#fe5e04"
              d="M 160.5,242.5 C 138.007,250.666 115.34,258.666 92.5,266.5C 91.5023,258.528 91.169,250.528 91.5,242.5C 103.268,238.411 115.101,234.411 127,230.5C 138.455,234.038 149.622,238.038 160.5,242.5 Z"
              id="path58" />
          </g>
        </svg>
				<p tw="ml-3 font-semibold">${siteConfig.title}</p>
			</div>
			<p>by ${siteConfig.author}</p>
		</div>
	</div>`;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
	const { pubDate, title } = context.props as Props;

	const postDate = getFormattedDate(pubDate, {
		month: "long",
		weekday: "long",
	});
	const svg = await satori(markup(title, postDate), ogOptions);
	const png = new Resvg(svg).render().asPng();
	return new Response(png, {
		headers: {
			"Cache-Control": "public, max-age=31536000, immutable",
			"Content-Type": "image/png",
		},
	});
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	return posts
		.filter(({ data }) => !data.ogImage)
		.map((post) => ({
			params: { slug: post.id },
			props: {
				pubDate: post.data.updatedDate ?? post.data.publishDate,
				title: post.data.title,
			},
		}));
}
