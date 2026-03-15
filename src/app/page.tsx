"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Heart, Sparkles, Package, TrendingUp, Smile, MapPin, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="blurBottom"
      cardStyle="gradient-radial"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Bangalore Iyangar's Bakery"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Call Now", href: "tel:087797-05637" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Bangalore Iyangar's Bakery"
          description="From breads and puffs to cakes, cookies, and daily fresh bakery favorites — Bangalore Iyangar's Bakery brings traditional taste and quality to your neighborhood."
          buttons={[
            { text: "Call Now", href: "tel:087797-05637" },
            { text: "Get Directions", href: "https://share.google/I8j0bBQN0784mzZ5A" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzWwYqYQ0VU3qHpJgqQsvrJvII/uploaded-1773596974598-wvaj9lzo.webp"
          imageAlt="Fresh bakery items - breads, cakes, puffs, cookies, and pastries"
          mediaAnimation="opacity"
          frameStyle="card"
          ariaLabel="Hero section - Bangalore Iyangar's Bakery"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Welcome to Bangalore Iyangar's Bakery"
          description="A trusted neighborhood bakery serving the Thane community with freshly baked products every single day. We believe in using quality ingredients, traditional baking methods, and passionate attention to detail. From early morning breads to fresh pastries, our daily offerings bring warmth and freshness to your table. Whether you're looking for everyday bakery items or special celebration cakes, we're here to serve you with a smile."
          tag="About Us"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[{ text: "Visit Us Today", href: "tel:087797-05637" }]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzWwYqYQ0VU3qHpJgqQsvrJvII/uploaded-1773597179750-o5joykvd.jpg"
          imageAlt="Warm and welcoming Bangalore Iyangar's Bakery storefront"
          useInvertedBackground={false}
          ariaLabel="About section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentySix
          title="Why Choose Bangalore Iyangar's Bakery"
          description="We stand out in the neighborhood for our commitment to freshness, quality, variety, and exceptional service. Here's what makes us special:"
          features={[
            {
              title: "Fresh Every Day",              description: "Baked fresh daily using quality ingredients. All our breads, pastries, and cakes are prepared on-site to ensure maximum freshness.",              buttonIcon: Sparkles,
              buttonHref: "tel:087797-05637"
            },
            {
              title: "Wide Variety",              description: "From traditional breads and puffs to custom celebration cakes, cookies, pastries, and daily snacks. Something for everyone.",              buttonIcon: Package,
              buttonHref: "tel:087797-05637"
            },
            {
              title: "Affordable Quality",              description: "Premium quality bakery items at prices that keep you coming back. Great value for local families.",              buttonIcon: TrendingUp,
              buttonHref: "tel:087797-05637"
            },
            {
              title: "Friendly Service",              description: "Our team treats every customer like family. We're here to help you find exactly what you need.",              buttonIcon: Smile,
              buttonHref: "tel:087797-05637"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Why choose us section"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Our Bakery Specials"
          description="Explore our popular bakery items and daily favorites. Available items may vary daily. Please call the bakery to check today's fresh items or to place cake orders."
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "breads",              name: "Fresh Breads",              price: "",              variant: "Daily Fresh",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-pie-with-multiple-ingredients-wooden-cutting-board_114579-33990.jpg",              imageAlt: "Fresh baked breads variety"
            },
            {
              id: "cakes",              name: "Celebration Cakes",              price: "",              variant: "Custom Orders",              imageSrc: "http://img.b2bpic.net/free-photo/birthday-cake-front-watercolor-background_23-2148015948.jpg",              imageAlt: "Beautiful celebration cakes"
            },
            {
              id: "puffs",              name: "Puffs ",              price: "",              variant: "Hot & Fresh",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzWwYqYQ0VU3qHpJgqQsvrJvII/uploaded-1773597946734-rt5wtweq.jpg",              imageAlt: "Golden crispy puffs"
            },
            {
              id: "cookies",              name: "Cookies & Biscuits",              price: "",              variant: "Homemade",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-tasty-pancakes-with-sweet-cakes-fruits-dark-surface-sweet-cake-dessert_140725-82020.jpg",              imageAlt: "Fresh baked cookies variety"
            },
            {
              id: "pastries",              name: "Pastries",              price: "",              variant: "Assorted",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-delicious-dessert-top-view_23-2148717406.jpg",              imageAlt: "Fresh pastries display"
            },
            {
              id: "snacks",              name: "Daily Snacks",              price: "",              variant: "Quick Bites",              imageSrc: "http://img.b2bpic.net/free-photo/plate-with-pakistani-food-high-angle_23-2148825157.jpg?_wi=2",              imageAlt: "Quick snack options"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Product showcase section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            { id: "1", name: "Priya Sharma", imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-blond-girl-posing-against-white-wall_176420-32838.jpg", imageAlt: "Customer Priya Sharma" },
            { id: "2", name: "Rajesh Patel", imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-dark-jacket-pink-background_179666-14255.jpg", imageAlt: "Customer Rajesh Patel" },
            { id: "3", name: "Anjali Desai", imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-business-office-business-center_1303-20365.jpg", imageAlt: "Customer Anjali Desai" },
            { id: "4", name: "Vikram Singh", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-wearing-suit_23-2149396254.jpg", imageAlt: "Customer Vikram Singh" },
            { id: "5", name: "Neha Gupta", imageSrc: "http://img.b2bpic.net/free-photo/coffee-break_1098-14791.jpg", imageAlt: "Customer Neha Gupta" },
            { id: "6", name: "Arun Nair", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-green-wall-cheerful-smiling-point-index-fingers-white-teeth-smile_343596-6984.jpg", imageAlt: "Customer Arun Nair" }
          ]}
          cardTitle="What Our Customers Love"
          cardTag="⭐⭐⭐⭐⭐ Customer Reviews"
          cardTagIcon={Star}
          cardAnimation="blur-reveal"
          useInvertedBackground={false}
          ariaLabel="Customer testimonials section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Got questions? We're here to help! Check out our most asked questions below."
          faqs={[
            {
              id: "1",              title: "What are your opening hours?",              content: "We're open 8 AM to 11 PM every single day, including Sundays and holidays. So whenever you crave fresh bakery items, we're here for you!"
            },
            {
              id: "2",              title: "Can I order custom cakes?",              content: "Absolutely! We love creating custom cakes for birthdays, celebrations, and special occasions. Please call us at 087797-05637 to discuss your cake order, flavor preferences, and delivery details."
            },
            {
              id: "3",              title: "What items are always available?",              content: "Fresh breads, puffs, cookies, and daily snacks are typically available throughout the day. However, specific items may vary based on daily stock. We recommend calling ahead if you're looking for something specific."
            },
            {
              id: "4",              title: "Do you have online ordering?",              content: "Currently, we welcome walk-in customers and phone orders. Visit us at our store in Majiwada, Thane, or call us on 087797-05637 to place your order."
            },
            {
              id: "5",              title: "Where is your bakery located?",              content: "We're located at Shop Number 4, Jaydeep Park B Wing, West, near Fatima Church, Sainath Nagar, Majiwada, Thane, Maharashtra 400601. Easy to find in the neighborhood!"
            },
            {
              id: "6",              title: "What's your contact number?",              content: "You can reach us at 087797-05637. Call us to place orders, ask about daily items, or get directions to our store."
            }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Frequently asked questions section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact Us"
          title="Visit Us Today"
          description="Stop by our neighborhood bakery for the freshest baked goods in Thane. We're conveniently located near Fatima Church and open daily from 8 AM to 11 PM."
          tagIcon={MapPin}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-vector/flat-hotel-booking-concept_23-2148154645.jpg"
          imageAlt="Bangalore Iyangar's Bakery location map"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="Enter your phone number"
          buttonText="WhatsApp Us"
          termsText="We'll reach out to you shortly with information about our latest bakery items and special offers."
          ariaLabel="Contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Bangalore Iyangar's Bakery"
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Menu", href: "#products" },
                { label: "Customer Reviews", href: "#testimonials" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Call: 087797-05637", href: "tel:087797-05637" },
                { label: "Email Us", href: "mailto:info@bangaloreiyangars.com" },
                { label: "Visit Store", href: "#contact" },
                { label: "Google Business", href: "https://share.google/I8j0bBQN0784mzZ5A" }
              ]
            },
            {
              title: "Store Hours",              items: [
                { label: "Mon-Sun: 8 AM - 11 PM", href: "#" },
                { label: "Open Every Day", href: "#" },
                { label: "Fresh Bakes Daily", href: "#" },
                { label: "Majiwada, Thane", href: "#contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Bangalore Iyangar's Bakery. Freshly Baked Goodness in Thane."
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}