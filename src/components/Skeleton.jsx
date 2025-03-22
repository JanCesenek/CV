import React, { useState } from "react";
import {
  FaUserLarge,
  FaGraduationCap,
  FaBriefcase,
  FaHouseChimney,
  FaPhone,
  FaEnvelope,
  FaCakeCandles,
  FaChess,
  FaVolleyball,
  FaGuitar,
  FaSun,
  FaMoon,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GB, CZ } from "country-flag-icons/react/3x2";
import profile from "../imgs/profile.jpg";

const Skeleton = ({ isBoring, setBoring }) => {
  const [isCzech, setIsCzech] = useState(true);

  return (
    <div
      className={`border relative border-black rounded-lg w-[55rem] m-5 grid grid-cols-[7fr,3fr] [&>*]:p-5 ${
        isBoring && "shadow-lg shadow-black"
      } ${!isBoring && "text-yellow-400 border-yellow-400 shadow-lg shadow-yellow-400 bg-black"}`}>
      {isBoring ? (
        <div className="text-black">
          <FaMoon
            className="absolute top-4 left-4 w-10 h-10 hover:cursor-pointer"
            onClick={setBoring}
          />
        </div>
      ) : (
        <div className="text-yellow-400">
          <FaSun
            className="absolute top-4 left-4 w-10 h-10 hover:cursor-pointer"
            onClick={setBoring}
          />
        </div>
      )}
      <CZ
        className="absolute top-4 right-20 max-w-[3rem] border border-black !p-0 hover:cursor-pointer"
        onClick={() => setIsCzech(true)}
      />
      <GB
        className="absolute top-4 right-4 max-w-[3rem] border border-black !p-0 hover:cursor-pointer"
        onClick={() => setIsCzech(false)}
      />
      <div className="flex justify-center items-center row-start-1 row-end-2 col-start-1 col-end-3 [&>*]:mx-2">
        <img src={profile} alt="Profile pic" className="max-w-[5rem] rounded-lg" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[2.5rem] font-bold">Jan Česenek</h1>
          <h4 className="text-[0.8rem]">Software Developer</h4>
        </div>
      </div>
      <div className="flex flex-col row-start-2 row-end-3 col-start-1 col-end-2 [&>*]:my-2">
        <div className="flex items-center [&>*]:px-2">
          <FaUserLarge className="w-10 h-10" />
          <h2 className="text-[1.5rem] font-bold">{isCzech ? "Profil" : "Profile"}</h2>
        </div>
        <div className="flex flex-col [&>*]:my-2 text-[0.8rem]">
          {isCzech ? (
            <p>
              Mým středoškolským snem bylo studovat v Anglii, což se mi nakonec podařilo. Během
              studia jsem však zjistil, že mi zvolené obory nic neříkají, proto jsem se rozhodl pro
              <b> samostudium v oblasti IT</b> při práci. Absolvoval jsem několik zevrubných
              <b> online kurzů</b> (viz Odkazy), které mi daly potřebné znalosti, abych si mohl
              vytvořit <b>vlastní webovou stránku</b> (viz Odkazy - Osobní portfolio), kde
              demonstruji svoje znalosti. Stránka se neustále aktualizuje, jelikož pracuji na
              <b> nových full-stack aplikacích</b> a vylepšení svého portfolia.
            </p>
          ) : (
            <p>
              My high school dream was to study in England, in which I ultimately succeeded.
              However, I found out during my studies that chosen degrees weren't entertaining
              enough, which is why I chose to <b>study software development on my own</b> alongside
              work. I've completed a few thorough <b>online bootcamps</b> (see Links), which gave me
              the necessary skillset to be able to create <b>my own website</b> (see Links -
              Personal portfolio), where I showcase my knowledge. Website is constantly being
              updated, since I've been working on <b>new full-stack apps</b> and improving my
              portfolio in general.
            </p>
          )}
          {isCzech ? (
            <p>
              Samostudium mi dalo do života hodně věcí. Naučilo mě samostatně pracovat a sám si
              zadávat úkoly, být kreativní (přicházet s novými originálními nápady na nové
              aplikace), řešit problémy bez podpory akademického prostředí a úspěšně si sestrojit
              vlastní studijní plán.
            </p>
          ) : (
            <p>
              Studying on my own taught me a lot of things: how to work independently, assign new
              tasks for myself, be creative (come up with ideas for new apps), solve any
              problems/errors/bugs without the support of academic environment and successfully
              create my own study plan.
            </p>
          )}
          {isCzech ? (
            <p>
              Jelikož jsem žil 4 roky v zahraničí, umím <b>plynně anglicky</b> a jsem s tímto
              jazykem v každodenním kontaktu - veškeré zdroje, s kterými pracuji, jsou v angličtině.
            </p>
          ) : (
            <p>
              As I was living abroad for 4 years, I'm <b>fluent in English</b> and I use it every
              day - all resources I work with are in English.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col row-start-3 row-end-4 col-start-1 col-end-2 [&>*]:my-2">
        <div className="flex items-center [&>*]:px-2">
          <FaBriefcase className="w-10 h-10" />
          <h2 className="text-[1.5rem] font-bold">
            {isCzech ? "Předchozí zaměstnání" : "Previous employment"}
          </h2>
        </div>
        <div className="flex flex-col [&>*]:my-2 text-[0.8rem]">
          <div className="flex flex-col [&>*]:my-1">
            {isCzech ? (
              <h3 className="text-[1.1rem] font-bold">
                Sklad - praxe v různých firmách během studia
              </h3>
            ) : (
              <h3 className="text-[1.1rem] font-bold">
                Warehouse - practice in different companies alongside studying
              </h3>
            )}
            <h3 className="text-[1rem]">2017-2022</h3>
            {isCzech ? (
              <p>
                V posledním zaměstnání jsem měl na starosti expedici velkoobchodních zakázek, což
                zahrnovalo komunikaci s dopravci, nadřízenými a kolegy z obchodního oddělení,
                rozdělení a organizaci práce a práci na počítači při rozdělování zakázek.
              </p>
            ) : (
              <p>
                In my last job, I was responsible for dispatching wholesale orders, which included
                communication with carriers, superiors and colleagues from business department,
                dividing and organizing the work and working with PC when dividing the orders.
              </p>
            )}
          </div>
          <div className="flex flex-col [&>*]:my-1">
            {isCzech ? (
              <h3 className="text-[1.1rem] font-bold">
                Sociální pracovník - Carefirst Care Services, Colchester
              </h3>
            ) : (
              <h3 className="text-[1.1rem] font-bold">
                Carer - Carefirst Care Services, Colchester
              </h3>
            )}
            <h3 className="text-[1rem]">2019-2021</h3>
            {isCzech ? (
              <p>
                V rámci této brigády při studiu v Anglii jsem se staral o pacienty s různými druhy
                postižení. Zde jsem se naučil trpělivosti a jednání v krizových situacích, jelikož
                jsem se velmi často musel vypořádat s nepředvídatelným chováním klientů za
                nepříznivých podmínek a musel jsem velmi rychle reagovat.
              </p>
            ) : (
              <p>
                I was taking care of patients with different kinds of disabilities. This job taught
                be how to be patient and work under intense pressure, as I very often had to deal
                with unpredictable behaviour of my clients under unfavourable circumstances and had
                to react quickly.
              </p>
            )}
          </div>
          <div className="flex flex-col [&>*]:my-1">
            {isCzech ? (
              <h3 className="text-[1.1rem] font-bold">
                Administrativní pracovník - Autio, Chrudim
              </h3>
            ) : (
              <h3 className="text-[1.1rem] font-bold">Administrative worker - Autio, Chrudim</h3>
            )}
            <h3 className="text-[1rem]">{`8/2023 - ${isCzech ? "současnost" : "present"}`}</h3>
            {isCzech ? (
              <p>
                Zde převážně spravuji databázi produktů v e-shopu (přidávám/mažu/upravuji nové
                produkty). Také mám na starosti komunikaci s mezinárodními distributory, nové
                objednávky ze zahraničí a příležitostně navrhuji grafická řešení pro bannery s
                novými produkty.
              </p>
            ) : (
              <p>
                In this job, I mostly manage products database in an e-shop (adding/deleting/editing
                new products). I also communicate with international distributors, arrange new
                orders from abroad and occasionally develop graphical solutions for banners with new
                products.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col row-start-4 row-end-5 col-start-1 col-end-2 [&>*]:my-1">
        <div className="flex items-center [&>*]:px-2">
          <FaGraduationCap className="w-10 h-10" />
          <h2 className="text-[1.3rem] font-bold">{isCzech ? "Vzdělání" : "Education"}</h2>
        </div>
        <div className="flex flex-col">
          {isCzech ? (
            <h3 className="text-[1.1rem] font-bold">Gymnázium Josefa Ressela, Chrudim</h3>
          ) : (
            <h3 className="text-[1.1rem] font-bold">Josef Ressel grammar school, Chrudim</h3>
          )}
          <p className="text-[0.8rem]">9/2013 - 6/2017</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[1.1rem] font-bold">Business Management, University of Essex</h3>
          <p className="text-[0.8rem]">10/2017 - 5/2018</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[1.1rem] font-bold">Modern Languages, University of Essex</h3>
          <p className="text-[0.8rem]">10/2018 - 5/2020</p>
        </div>
      </div>
      <div
        className={`flex flex-col row-start-2 row-end-3 col-start-2 col-end-3 [&>*]:my-1 text-[0.8rem] ${
          isBoring ? "text-gray-600" : "text-yellow-600"
        }`}>
        <h2 className="font-bold self-center text-[1.3rem] !mb-5">
          {isCzech ? "Osobní údaje" : "Personal information"}
        </h2>
        <div className="flex [&>*]:px-2">
          <FaHouseChimney className="w-10 h-10" />
          <div className="flex flex-col">
            <div>J.E.Purkyně 550</div>
            <div>537 01 Chrudim</div>
            <div>{isCzech ? "Česká republika" : "Czech Republic"}</div>
          </div>
        </div>
        <div className="flex items-center [&>*]:px-2">
          <FaPhone className="w-10 h-10" />
          <div>+420 773 140 855</div>
        </div>
        <div className="flex items-center [&>*]:px-2">
          <FaEnvelope className="w-10 h-10" />
          <div>jan.cesenekCZ@gmail.com</div>
        </div>
        <div className="flex items-center [&>*]:px-2">
          <FaCakeCandles className="w-10 h-10" />
          <div>14.8.1998, Pardubice</div>
        </div>
      </div>
      <div
        className={`flex flex-col row-start-3 row-end-4 col-start-2 col-end-3 [&>*]:my-1 text-[0.8rem] ${
          isBoring ? "text-gray-600" : "text-yellow-600"
        }`}>
        <h2 className="font-bold self-center text-[1.3rem] !mb-5">
          {isCzech ? "Odkazy" : "Links"}
        </h2>
        <Link
          className={`${isBoring ? "text-red-600" : "text-yellow-200"} underline`}
          to="https://jancesenek.dev"
          target="_blank">
          {isCzech ? "Osobní portfolio" : "Personal portfolio"}
        </Link>
        <h3 className="self-center !my-5 text-[1rem] font-bold">
          {isCzech ? "Absolvované kurzy:" : "Completed bootcamps:"}
        </h3>
        <Link
          className={`${isBoring ? "text-orange-400" : "text-orange-200"} underline`}
          to="https://www.udemy.com/course/the-web-developer-bootcamp/"
          target="_blank">
          Web Developer Bootcamp
        </Link>
        <Link
          className={`${isBoring ? "text-orange-400" : "text-orange-200"} underline`}
          to="https://www.udemy.com/course/advanced-css-and-sass/"
          target="_blank">
          Advanced CSS and SASS
        </Link>
        <Link
          className={`${isBoring ? "text-orange-400" : "text-orange-200"} underline`}
          to="https://www.udemy.com/course/the-complete-javascript-course/"
          target="_blank">
          The Complete JavaScript Course
        </Link>
        <Link
          className={`${isBoring ? "text-orange-400" : "text-orange-200"} underline`}
          to="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
          target="_blank">
          React - The Complete Guide
        </Link>
        <Link
          className={`${isBoring ? "text-orange-400" : "text-orange-200"} underline`}
          to="https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/"
          target="_blank">
          The Ultimate MySQL Bootcamp
        </Link>
        <ul className="text-[1.3rem] font-bold [&>*]:text-[0.8rem] [&>*]:font-normal list-disc self-center !mt-10">
          {isCzech ? "Dovednosti" : "Skills"}
          <li className="mt-5">{isCzech ? "Řešení problémů" : "Problem solving"}</li>
          <li>{isCzech ? "Organizační schopnosti" : "Organization skills"}</li>
          <li>{isCzech ? "Samostatnost" : "Independence"}</li>
          <li>{isCzech ? "Pečlivost" : "Meticulousness"}</li>
          <li>{isCzech ? "Kreativita" : "Creativity"}</li>
          <li>{isCzech ? "Spolehlivost" : "Reliability"}</li>
          <li>{isCzech ? "ŘP sk. B" : "Drivers licence gr. B"}</li>
        </ul>
      </div>
      <div
        className={`flex flex-col row-start-4 row-end-5 col-start-2 col-end-3 [&>*]:my-1 text-[0.8rem] ${
          isBoring ? "text-gray-600" : "text-yellow-600"
        }`}>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2 className="text-[1.3rem] font-bold self-center !mb-5">
              {isCzech ? "Koníčky" : "Hobbies"}
            </h2>
            <div className="flex items-center [&>*]:px-2">
              <FaChess className="w-10 h-10" />
              <div>{isCzech ? "Šachy" : "Chess"}</div>
            </div>
            <div className="flex items-center [&>*]:px-2">
              <FaVolleyball className="w-10 h-10" />
              <div>{isCzech ? "Volejbal" : "Volleyball"}</div>
            </div>
            <div className="flex items-center [&>*]:px-2">
              <FaGuitar className="w-10 h-10" />
              <div>{isCzech ? "Kytara" : "Guitar"}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default Skeleton;
