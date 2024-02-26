<?php

class Employe {
        private $lastname;
        private $firstname;
        private $password;
        private $phone ;
        private $dOB;
        private $email;

        public function __construct( $firstname, $lastname, $password,$dOB,$email,$phone) {
            $this->firstname = $firstname;
            $this->lastname = $lastname;
            $this->password = $password;
            $this->dOB = $dOB;
            $this->email = $email;
            $this->phone = $phone;
        }
        public function getLastName() {
            return $this->lastname;
        }
        public function setLastName($lastname) {
            $this->lastname = $lastname;
        }
        public function getFirstName() {
            return $this->firstname;
        }
        public function setFirstName($firstname) {
            $this->firstname = $firstname;
        }
        public function getPassword() {
            return $this->password;
        }
        public function setPassword($p) {
            $this->password = $p;
        }
        public function getdOB() {
            return $this->dOB;
        }
        public function setdOB($dOB) {
            $this->dOB = $dOB;
        }
        public function getemail() {
            return $this->email;
        }
        public function setemail($email) {
            $this->email = $email;
        }
        public function getphone() {
            return $this->phone;
        }
        public function setphone($phone) {
            $this->phone = $phone;
        }

}


?>