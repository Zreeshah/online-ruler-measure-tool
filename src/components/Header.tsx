import React from 'react';
import { Ruler } from 'lucide-react';
import Link from 'next/link';
import MenuButton from './MenuButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  return (
    <header className="py-4 mb-6 border-b">
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex min-h-12 items-center">
          <Ruler size={28} className="text-ruler-primary mr-2" />
          <span className="text-2xl font-bold text-ruler-primary">Online-Ruler<span className="text-gray-800">.Onl</span></span>
        </Link>
        
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={`${navigationMenuTriggerStyle()} min-h-12 px-4`}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/print-ruler" className={`${navigationMenuTriggerStyle()} min-h-12 px-4`}>
                  Print Ruler
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="min-h-12">Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[250px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/blog" className="block select-none rounded-md p-3 font-semibold hover:bg-accent hover:text-accent-foreground">
                          All Measurement Guides
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/how-to-read-a-ruler" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          How to Read a Ruler
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/how-to-measure-on-phone" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          How to Measure on Your Phone
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/blog/metric-vs-imperial"
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Metric vs U.S. Customary
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/metric-system-explained" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          The Metric System Explained
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/mks-system" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          MKS System
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/natural-units-system" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Natural Units System
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/imperial-measurement-system" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Imperial Measurement System
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/clinometer-guide" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Clinometer: What It Is & How to Use It
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/depth-gauge-guide" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Depth Gauge: What It Is & How to Use It
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/dimensionless-numbers" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Dimensionless Numbers
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/measurement-units-guide" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Measurement Units Guide
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/blog/how-to-use-a-ruler" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          How to Use a Ruler
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="min-h-12">More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/about" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          About Us
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/contact" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          Contact
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/privacy" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          Privacy Policy
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/disclaimer" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          Disclaimer
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex md:hidden items-center">
          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
