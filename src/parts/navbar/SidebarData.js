import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    ref: "goToHomeSection",
    title: "Home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text text-white",
  },
  {
    title: "Tentang Kami",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text text-white",
  },
  {
    title: "Perjalanan",
    icon: <MdIcons.MdTimeline />,
    cName: "nav-text text-white",
  },
  {
    title: "Join us",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text text-white",
  },
  {
    title: "Testimonials",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text text-white",
  },
  {
    title: "Contact Us",
    icon: <MdIcons.MdCall />,
    cName: "nav-text text-white",
  },
];
