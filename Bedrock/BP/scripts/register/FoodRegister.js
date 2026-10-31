var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

import { ItemCompleteUseAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";

const NEGATIVE_EFFECTS = [
    "poison", "wither", "hunger", "slowness", "weakness",
    "blindness", "darkness", "nausea", "mining_fatigue"
];

function clearNegativeEffects(player) {
    for (const eff of NEGATIVE_EFFECTS) {
        player.removeEffect(eff);
    }
}

function clearAllEffects(player) {
    for (const eff of player.getEffects()) {
        player.removeEffect(eff.typeId);
    }
}

function applyMarmaladeEffect(player) {
    if (Math.random() < 0.10) {
        player.addEffect("regeneration", 150, { amplifier: 0 });
    } else if (Math.random() < 0.30) {
        player.addEffect("jump_boost", 150, { amplifier: 0 });
    } else if (Math.random() < 0.20) {
        player.addEffect("speed", 150, { amplifier: 0 });
    } else if (Math.random() < 0.15) {
        player.addEffect("strength", 150, { amplifier: 0 });
    } else if (Math.random() < 0.05) {
        player.addEffect("haste", 600, { amplifier: 1 });
    } else {
        player.addEffect("regeneration", 100, { amplifier: 0 });
    }
}

export class FoodRegister {
    static onConsume(event) {
        if (event.useDuration) return;
        const player = event.source;
        const itemStack = event.itemStack;
        if (!player || !itemStack) return;

        const itemId = itemStack.typeId;

        switch (itemId) {
            case "sweet_delight:apple_cupcake":
                player.addEffect("absorption", 600, { amplifier: 0 });
                break;

            case "sweet_delight:bitter_chocolate":
                player.addEffect("health_boost", 100, { amplifier: 0 });
                player.addEffect("regeneration", 100, { amplifier: 0 });
                break;

            case "sweet_delight:chak_chak":
                player.addEffect("saturation", 20, { amplifier: 0 });
                break;

            case "sweet_delight:chocolate_apple":
            case "sweet_delight:chocolate":
                player.addEffect("regeneration", 100, { amplifier: 0 });
                player.addEffect("speed", 100, { amplifier: 0 });
                break;

            case "sweet_delight:chocolate_glaze":
                player.addEffect("speed", 200, { amplifier: 0 });
                player.addEffect("instant_health", 1, { amplifier: 0 });
                break;

            case "sweet_delight:chocolate_ice_cream":
                player.addEffect("speed", 100, { amplifier: 0 });
                try { player.extinguishFire(true); } catch (e) { }
                break;

            case "sweet_delight:chocolate_rabbit":
                player.addEffect("speed", 600, { amplifier: 0 });
                player.addEffect("jump_boost", 600, { amplifier: 0 });
                break;

            case "sweet_delight:chocolate_croussant":
            case "sweet_delight:chocolate_eclair":
                player.addEffect("speed", 120, { amplifier: 0 });
                break;

            case "sweet_delight:clean_chocolate":
                player.addEffect("regeneration", 100, { amplifier: 0 });
                break;

            case "sweet_delight:condensed_milk":
                clearAllEffects(player);
                player.addEffect("instant_health", 1, { amplifier: 0 });
                break;

            case "sweet_delight:ginderbread_heart":
                player.addEffect("health_boost", 300, { amplifier: 1 });
                player.addEffect("regeneration", 20, { amplifier: 0 });
                break;

            case "sweet_delight:ginderbread_ingot":
                player.addEffect("resistance", 120, { amplifier: 0 });
                break;

            case "sweet_delight:ginderbread_spruce":
                player.addEffect("speed", 60, { amplifier: 0 });
                player.addEffect("jump_boost", 60, { amplifier: 0 });
                break;

            case "sweet_delight:glow_berry_cupcake":
            case "sweet_delight:glow_berry_pretzel":
                player.addEffect("night_vision", 60, { amplifier: 0 });
                break;

            case "sweet_delight:glow_berries_rich_cream":
                player.addEffect("instant_health", 1, { amplifier: 0 });
                player.addEffect("night_vision", 60, { amplifier: 0 });
                try { player.extinguishFire(true); } catch (e) { }
                break;

            case "sweet_delight:golden_cockerel":
            case "sweet_delight:golden_pie_slice":
                player.addEffect("absorption", 60, { amplifier: 1 });
                break;

            case "sweet_delight:golden_pie":
                player.addEffect("strength", 150, { amplifier: 0 });
                player.addEffect("absorption", 600, { amplifier: 2 });
                player.addEffect("speed", 80, { amplifier: 0 });
                break;

            case "sweet_delight:honey_apple":
            case "sweet_delight:honey_balls":
            case "sweet_delight:honey_caramel":
            case "sweet_delight:honey_eclair":
            case "sweet_delight:honey_pancakes":
            case "sweet_delight:honey_pie":
            case "sweet_delight:honey_pie_slice":
            case "sweet_delight:honey_pretzel":
                clearNegativeEffects(player);
                break;

            case "sweet_delight:iris_pie":
                player.addEffect("instant_health", 1, { amplifier: 1 });
                break;

            case "sweet_delight:milk_chocolate":
                clearAllEffects(player);
                player.addEffect("regeneration", 100, { amplifier: 0 });
                break;

            case "sweet_delight:milk_eclair":
                clearAllEffects(player);
                break;

            case "sweet_delight:milk_ice_cream":
                clearAllEffects(player);
                try { player.extinguishFire(true); } catch (e) { }
                break;

            case "sweet_delight:sunflower_halva":
                player.addEffect("slowness", 240, { amplifier: 1 });
                player.addEffect("nausea", 40, { amplifier: 1 });
                break;

            case "sweet_delight:poppy_halva":
                player.addEffect("slowness", 240, { amplifier: 0 });
                player.addEffect("nausea", 40, { amplifier: 1 });
                break;

            case "sweet_delight:pudding":
                player.addEffect("jump_boost", 600, { amplifier: 0 });
                break;

            case "sweet_delight:rolled_out_wheat_dough":
                player.addEffect("hunger", 60, { amplifier: 1 });
                player.addEffect("nausea", 60, { amplifier: 1 });
                break;

            case "sweet_delight:snow_ice_cream":
                player.addEffect("slowness", 240, { amplifier: 0 });
                try { player.extinguishFire(true); } catch (e) { }
                break;

            case "sweet_delight:sweet_berry_chocolate":
                player.addEffect("regeneration", 100, { amplifier: 0 });
                player.addEffect("instant_health", 1, { amplifier: 0 });
                break;

            case "sweet_delight:sweet_berry_ice_cream":
                player.addEffect("instant_health", 1, { amplifier: 0 });
                try { player.extinguishFire(true); } catch (e) { }
                break;

            case "sweet_delight:caramel_cockerel":
            case "sweet_delight:iris":
            case "sweet_delight:iris_pie_slice":
            case "sweet_delight:caramel_lolipop":
            case "sweet_delight:sweet_berry_croussant":
            case "sweet_delight:sweet_berry_cupcake":
            case "sweet_delight:sweet_berry_pie":
            case "sweet_delight:sweet_berry_pie_slice":
            case "sweet_delight:sweet_berry_pretzel":
                player.addEffect("instant_health", 1, { amplifier: 0 });
                break;

            case "sweet_delight:red_marmalade":
            case "sweet_delight:orange_marmalade":
            case "sweet_delight:yellow_marmalade":
            case "sweet_delight:lime_marmalade":
            case "sweet_delight:green_marmalade":
            case "sweet_delight:light_blue_marmalade":
            case "sweet_delight:blue_marmalade":
            case "sweet_delight:cyan_marmalade":
            case "sweet_delight:purple_marmalade":
            case "sweet_delight:magenta_marmalade":
            case "sweet_delight:pink_marmalade":
            case "sweet_delight:brown_marmalade":
                applyMarmaladeEffect(player);
                break;
        }
    }
}

__decorate([
    EventAPI.register(world.afterEvents.itemCompleteUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemCompleteUseAfterEvent]),
    __metadata("design:returntype", void 0)
], FoodRegister, "onConsume", null);